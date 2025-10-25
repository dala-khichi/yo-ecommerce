const Order = require("../models/Order");
const Cart = require("../models/Cart");
const OrderItem = require("../models/orderItem");
const ShippingDetails = require("../models/ShippingDetail");
const Payment = require("../models/Payment");
const Aaddresses = require("../models/Address");
const { randomString, expiryDate } = require("../../utils/randomString");

class OrderService {
    static async getAll(options, userId) {
  const orderData = await Order.getAll(options, userId);

  const result = await Promise.all(
    orderData.map(async (e) => {
      const items = await OrderItem.findAll(e.id);

                 const detailsArr= items.map((a,b)=>{
                    
                    return JSON.parse(a.item_variant_details)

                   })
   
                   

     // console.log(items.item_variant_details)
        // const itemDetails = JSON.parse(items); 

      return {...e,items: detailsArr};
    })
  );

  return result;
}

    static async getById(id,userId) {
        return await Order.getById(id,userId);
    }

    static async getByIdForUpdate(id) {
        return await Order.getByIdForUpdate(id);
    }



static async create(data, userId) {
    const { couponCode, selectedAddressId, paymentType } = data;
    try {
        const cartItems  = await Cart.getAllForCardItem(userId);
        
      /// const cartItems = await Cart.getAll(userId);
        if (!cartItems || cartItems.length === 0) throw new Error('No items in cart to place order');


        const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
        let payment_id, paymentOrderId, payment_session_id;

           // Order creation
        const order_id = await Order.create({
            user_id: userId,
            status: "PENDING",
            payment_mode: paymentType,
            total_amount: totalAmount
        });


   // Shipping details
        const addressData = await Aaddresses.getById(selectedAddressId);
        const shipping_id = await ShippingDetails.create({
            order_id,
            ...addressData,
            tracking_no:randomString() ,
            estimated_delivery_date: expiryDate(1)
        });



    for (const item of cartItems) {
            await OrderItem.create({
                order_id,
                item_variant_id: item.item_variant_id,
                item_variant_details: JSON.stringify(item),
            });
        }




  


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
                payment_gateway_order_id: paymentOrderId,
                mata_data:paymentData
            });
        } else {
            // COD payment
            payment_id = await Payment.create({
                order_id,
                order_amount: totalAmount,
                order_currency: "INR",
                payment_status: "PENDING",
                payment_gateway_order_id: 2,
                  mata_data:"{}"
            });
            
            await Order.updateStatus(order_id, "PROCESSING")
          
            await Cart.clearUserCart(userId);
          
          
          
          
        }

        
     
       

    
        
        
        // Update Payment & Shipping
        // await Payment.update(payment_id, { order_id });
        // await ShippingDetails.update(shipping_id, { order_id });
        
        // Optionally clear user cart

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
