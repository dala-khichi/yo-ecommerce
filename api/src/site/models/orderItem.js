const db = require('../../config/db');

const OrderItem = {
  create: (data) => {
       console.log(data)


    const sql = `INSERT INTO order_items (order_id, item_variant_id,item_variant_details	) VALUES (?, ?, ?)`;
    return db.query(sql, [data.order_id, data.item_variant_id,data.item_variant_details	]);
  },

  findAll: () => {
    const sql = `SELECT * FROM order_items ORDER BY id DESC`;
    return db.query(sql);
  },

  findById: (id) => {
    const sql = `SELECT * FROM order_items WHERE id = ?`;
    return db.query(sql, [id]);
  },

  update: (id, data) => {
    const sql = `UPDATE order_items SET order_id = ?, item_variant_id = ?,item_variant_details = ? WHERE id = ?`;
    return db.query(sql, [data.order_id, data.item_variant_id,data.item_variant_details, id]);
  },

  delete: (id) => {
    const sql = `DELETE FROM order_items WHERE id = ?`;
    return db.query(sql, [id]);
  }
};

module.exports = OrderItem;
