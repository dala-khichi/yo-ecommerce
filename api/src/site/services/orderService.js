const Order = require("../models/Order");
const Cart = require("../models/Cart");
const OrderItem = require("../models/orderItem");
const ShippingDetail = require("../models/ShippingDetail");
const Payment = require("../models/Payment");
const Aaddresses = require("../models/Address");


class OrderService {
    static async getAll(options) {
        return await Order.getAll(options);
    }

    static async getById(id) {
        return await Order.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await Order.getByIdForUpdate(id);
    }

    static async create(data, userId) {
        const { couponCode, selectedAddressId, paymentType } = data;

        try {


            const cartItems = await Cart.getAllbyUserId(userId);

            if (!cartItems || cartItems.length === 0) {
                throw new Error('No items in cart to place order');

            }




            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            const totalAmount = cartItems.reduce((sum, item) => {
                return sum + (item.price * item.quantity);
            }, 0);

console.log(1)


            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


            // const { payment_session_id, order_id: paymentOrderId } = await Payment.createOrder({
            //     amount: 500,
            //     customer: {
            //         id: "user_123",
            //         name: "Adarsh",
            //         email: "adarsh@test.com",
            //         phone: "9876543210"
            //     },
            //     cartItems: [
            //         {
            //             item_id: "item_1",
            //             item_name: "Shoes",
            //             item_desc: "Comfortable shoes",
            //             item_price: 500,
            //             quantity: 1,
            //             image_url: "https://example.com/shoe.png"
            //         }
            //     ],
            //     returnUrl: "https://example.com/success",
            //     notifyUrl: "https://example.com/webhook",
            //     expiryDays: 2,
            //     tags: { name: "Adarsh", company: "MyShop" }
            // });

console.log(2)


            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



            const payment_id = await Payment.create({
                order_id: null,
                order_amount: totalAmount,
                order_currency: "INR",
                payment_status: "PENDING",
                payment_gateway_order_id: paymentOrderId, 
                mata_data:""
            });


console.log(3)
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            const addressData = await Aaddresses.getById(selectedAddressId)

            const shipping_id = await ShippingDetails.create({
                order_id: null,
                ...addressData,
                tracking_no,
                estimated_delivery_date: "2d"
            });

            /////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(4)


            const order_id = await Order.create({
                user_id,
                payment_id,
                status: "PENDING",
                payment_mode: "ONLINE",
                shipping_id,
                total_amount: totalAmount
            });


            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(5)


            for (const item of cartItems) {
                await OrderItem.create({
                    order_id,
                    item_variant_id: item.item_variant_id,
                    item_variant_details: JSON.stringify(item),
                    quantity: item.quantity,
                    price: item.price
                });
            }

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            await Payment.update(payment_id, { order_id });
            await ShippingDetails.update(shipping_id, { order_id });










            // 3. Create the order
            // const orderData = {
            //     user_id: userId,
            //     payment_id: data.payment_id || null,
            //     status: 'PENDING', // or whatever initial status you want
            //     payment_mode: data.payment_mode || 'COD', // default to cash if not specified
            //     shipping_id: data.shipping_id || 0,
            //     total_amount: totalAmount || 0
            // };

            // const orderId = await Order.create(orderData);


            // const shippingDetail = await ShippingDetail.create({
            //     order_id: 2,
            //     address: 4,
            //     city: 4,
            //     state: 6,
            //     pincode: 6,
            //     tracking_no: 7,
            //     estimated_delivery_date: 8
            // })


            // // 4. Create order items for each cart item
            // for (const item of cartItems) {
            //     await OrderItem.create({
            //         order_id: orderId,
            //         item_variant_id: item.item_variant_id,
            //         quantity: item.quantity,
            //         price: item.price
            //     });
            // }

            // // 5. Clear the user's cart after order is created
            // await Cart.clearUserCart(userId);

            // // Commit the transaction


            return payment_session_id;
        } catch (error) {


            // Rollback in case of error

            throw error;
        }
    }

static async createv1(data, userId) {
    const { couponCode, selectedAddressId, paymentType } = data;

    try {
        const cartItems = await Cart.getAllbyUserId(userId);
        if (!cartItems || cartItems.length === 0) throw new Error('No items in cart to place order');

        const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        let payment_id, paymentOrderId, payment_session_id;

        if (paymentType === "ONLINE") {
            // ONLINE payment
            const paymentData = await Payment.createOrder({
                amount: totalAmount,
                customer: {
                    id: userId,
                    name: data.name,
                    email: data.email,
                    phone: data.phone
                },
                cartItems: cartItems.map(item => ({
                    item_id: item.id,
                    item_name: item.name,
                    item_desc: item.description || "",
                    item_price: item.price,
                    quantity: item.quantity,
                    image_url: item.image || ""
                })),
                returnUrl: data.returnUrl,
                notifyUrl: data.notifyUrl,
                expiryDays: data.expiryDays || 2,
                tags: data.tags || {}
            });

            payment_session_id = paymentData.payment_session_id;
            paymentOrderId = paymentData.order_id;

            payment_id = await Payment.create({
                order_id: null,
                order_amount: totalAmount,
                order_currency: "INR",
                payment_status: "PENDING",
                payment_gateway_order_id: paymentOrderId
            });
        } else {
            // COD payment
            payment_id = await Payment.create({
                order_id: null,
                order_amount: totalAmount,
                order_currency: "INR",
                payment_status: "COD",
                payment_gateway_order_id: null
            });
        }

        // Shipping details
        const addressData = await Addresses.getById(selectedAddressId);
        const shipping_id = await ShippingDetails.create({
            order_id: null,
            ...addressData,
            tracking_no: generateTrackingNo(),
            estimated_delivery_date: calculateEstimatedDeliveryDate()
        });

        // Order creation
        const order_id = await Order.create({
            user_id: userId,
            payment_id,
            status: "PENDING",
            payment_mode: paymentType,
            shipping_id,
            total_amount: totalAmount
        });

        // Order items
        for (const item of cartItems) {
            await OrderItem.create({
                order_id,
                item_variant_id: item.item_variant_id,
                item_variant_details: JSON.stringify(item),
                quantity: item.quantity,
                price: item.price
            });
        }

        // Update Payment & Shipping
        await Payment.update(payment_id, { order_id });
        await ShippingDetails.update(shipping_id, { order_id });

        // Optionally clear user cart
        await Cart.clearUserCart(userId);

        return paymentType === "ONLINE" ? payment_session_id : "COD_ORDER_PLACED";

    } catch (error) {
        throw error;
    }
}




    static async update(id, data) {
        return await Order.update(id, data);
    }

    static async delete(id) {
        return await Order.delete(id);
    }
}

module.exports = OrderService;
