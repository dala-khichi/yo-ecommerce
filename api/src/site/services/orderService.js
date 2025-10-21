const Order = require("../models/Order");
const Cart = require("../models/Cart");
const OrderItem = require("../models/orderItem");
const ShippingDetail = require("../models/ShippingDetail");

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
      
        // Start a transaction
       // {order_id, address, city, state, pincode, tracking_no, estimated_delivery_date};
        
        try {
          
            // 1. Get all cart items for the user
            const cartItems = await Cart.getAllbyUserId(userId);
            
            if (!cartItems || cartItems.length === 0) {
                throw new Error('No items in cart to place order');
            }
            
            ///console.dir(cartItems);
            // 2. Calculate total amount from cart items
            // Note: You might need to adjust this based on your actual cart structure
            const totalAmount = cartItems.reduce((sum, item) => {
                return sum + (item.price * item.quantity);
            }, 0);
            
            console.log(totalAmount)
            
            // 3. Create the order
            const orderData = {
                user_id: userId,
                payment_id: data.payment_id || null,
                status: 'PENDING', // or whatever initial status you want
                payment_mode: data.payment_mode || 'COD', // default to cash if not specified
                shipping_id: data.shipping_id || 0,
                total_amount: totalAmount|| 0
            };
            
            const orderId = await Order.create(orderData);
            
            
         const shippingDetail = await ShippingDetail.create({
                    order_id:2, 
                  address:4,
                  city:4,
                  state:6, 
                  pincode:6,
                  tracking_no:7,
                  estimated_delivery_date:8
            })
            
            
            // 4. Create order items for each cart item
            for (const item of cartItems) {
                await OrderItem.create({
                    order_id: orderId,
                    item_variant_id: item.item_variant_id,
                    quantity: item.quantity,
                    price: item.price
                });
            }
            
            // 5. Clear the user's cart after order is created
            await Cart.clearUserCart(userId);
            
            // Commit the transaction
            
            
            return orderId;
        } catch (error) {
          
          
            // Rollback in case of error
            
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
