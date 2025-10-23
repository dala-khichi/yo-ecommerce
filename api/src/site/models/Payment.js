const db = require("../../config/db");
const config = require('../../config/env');
const { Cashfree, CFEnvironment } = require("cashfree-pg");
const {randomString,expiryDate} = require("../../utils/randomString");


class Payment {

    

    

    static async create({ order_id, order_amount, order_currency, payment_status }) {
        const query = `INSERT INTO payments (order_id, order_amount, order_currency, payment_status) 
                       VALUES (?, ?, ?, ?)`;
        const [result] = await db.execute(query, [order_id, order_amount, order_currency, payment_status]);
        return result.insertId;
    }

    static async update(id, { order_id, order_amount, order_currency, payment_status }) {
        const query = `UPDATE payments SET order_id = ?, order_amount = ?, order_currency = ?, payment_status = ? 
                       WHERE id = ?`;
        const [result] = await db.execute(query, [order_id, order_amount, order_currency, payment_status, id]);
        return result.affectedRows;
    }
    
    static async totel() {
        const query = `SELECT COUNT(*) AS total_payments FROM payments;`;
        
        const [row]=  await db.execute(query);
      return row;
    }

    static async delete(id) {
        const query = "DELETE FROM payments WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
    
    static async createOrder() {

const cashfree = new Cashfree(CFEnvironment.SANDBOX, config?.clientId, config.secretKey);

var request = {
    "order_amount": 1.00,
    "order_currency": "INR",
    "order_id": `${randomString() + randomString()}`,
    "customer_details": {
        "customer_id": "devstudio_user",
        "customer_phone": "9876543210",
        "customer_name": "Harshith",
        "customer_email": "test@cashfree.com"
    },
    "order_meta": {
        "return_url": "https://www.cashfree.com/devstudio/preview/pg/web/popupCheckout?order_id={order_id}",
        "notify_url": "https://www.cashfree.com/devstudio/preview/pg/webhooks/21617291",
        "payment_methods": "cc,dc,upi"
    },
    "cart_details": {
        "cart_items": [
            {
                "item_id": "devstudio_cart_id",
                "item_name": "Shoes",
                "item_description": "Durable, comfortable, and perfect for adding personality to any outfit.",
                "item_image_url": "https://cashfreelogo.cashfree.com/website/landings-cache/landings/occ/brownShoe.png",
                "item_original_unit_price": 1.00,
                "item_discounted_unit_price": 1.00,
                "item_quantity": 1,
                "item_currency": "INR"
            }
        ]
    },
    "order_expiry_time": `${expiryDate(1).toISOString()}`,
    "order_note": "Sample Order Note",
    "order_tags": {
        "name": "Developer",
        "company": "Cashfree"
    }
};

return await cashfree.PGCreateOrder(request).then((response) => {
   return {payment_session_id:response?.data.payment_session_id}
    
}).catch((error) => {
    throw new Error(error?.response?.data?.message||"unsptid error");
});
 
    }
    
    
}

module.exports = Payment;
