const db = require("../../config/db");

class Cart {
//     static async getAll({ page = 1, limit = 10, sortBy = "created_at", order = "DESC" },userId) {
//         const offset = (page - 1) * limit;
//         const validSortBy = ["created_at", "updated_at", "expires_at"];
//         const validOrder = ["ASC", "DESC"];
// 
//         if (!validSortBy.includes(sortBy)) sortBy = "created_at";
//         if (!validOrder.includes(order)) order = "DESC";
// 
//         const query = `SELECT * FROM cart ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
//         const [results] = await db.execute(query, [limit, offset]);
//         return results;
//     }
// 
    static async getById(id) {
      const query = "SELECT * FROM cart WHERE id = ?";
       // const query = "SELECT id FROM cart WHERE item_variant_id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }
    
    static async getTotalPrice(id) {
      const query = `SELECT 
    SUM(iv.price * c.quantity) AS total_price
FROM cart c
JOIN item_variants iv ON c.item_variant_id = iv.id
WHERE c.user_id = ?`;
       // const query = "SELECT id FROM cart WHERE item_variant_id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }
    
    
    static async getAllbyUserId(userId) {
      
      //const query = "SELECT id,quantity,quantity,item_variant_id  FROM cart WHERE user_id = ?";
       const query = "SELECT c.id,c.quantity,c.quantity,c.item_variant_id , iv.price FROM cart c JOIN item_variants  iv On  c.item_variant_id = iv.id  WHERE user_id = ?";
        const [results] = await db.execute(query, [userId]);
        return results.length ? results : null;
        //get simple data 
       //by user id 
    }
    
    
  
    
    
    
    
    
    
    
    static async getAllold(x,id) {
      
      const query = `SELECT 
    ii.img,
    i.name AS item_name,
    iv.size_id AS size,
    iv.color_id AS color,
    c.quantity,
    iv.price
FROM 
    cart c
LEFT JOIN 
    item_variants iv ON c.item_variant_id = iv.id
LEFT JOIN 
    items i ON iv.item_id = i.id
LEFT JOIN 
    (SELECT 
         item_id, 
         MIN(id) AS min_img_id 
     FROM 
         item_images 
     GROUP BY 
         item_id
    ) AS first_img ON first_img.item_id = i.id
LEFT JOIN 
    item_images ii ON ii.id = first_img.min_img_id
WHERE 
    c.user_id = ?`;
       // const query = "SELECT id FROM cart WHERE item_variant_id = ?";
        const [results] = await db.execute(query, [id]);
        console.log(results);
        return results.length ? results : null;
    }
    static async getAll(x,id) {
      
      const query = `SELECT 
    ii.img,
    i.name AS item_name,
    co.color  AS color,
    s.size  AS size,
    c.quantity,
    iv.price,
    c.id
FROM 
    cart c
LEFT JOIN 
    item_variants iv ON c.item_variant_id = iv.id
LEFT JOIN 
    items i ON iv.item_id = i.id
LEFT JOIN 
    colors co ON iv.color_id= co.id
LEFT JOIN 
    sizes s ON iv.size_id = s.id
LEFT JOIN 
    (SELECT 
         item_id, 
         MIN(id) AS min_img_id 
     FROM 
         item_images 
     GROUP BY 
         item_id
    ) AS first_img ON first_img.item_id = i.id
LEFT JOIN 
    item_images ii ON ii.id = first_img.min_img_id
WHERE 
    c.user_id = ?`;
       // const query = "SELECT id FROM cart WHERE item_variant_id = ?";
        const [results] = await db.execute(query, [id]);
        console.log(results);
        return results.length ? results : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }
    static async getByVariant_id(id) {
        const query = "SELECT id FROM cart WHERE item_variant_id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async create({ item_variant_id, quantity },user_id) {
        const query = `INSERT INTO cart (user_id, item_variant_id, quantity) 
                       VALUES (?, ?, ?)`;
        const [result] = await db.execute(query, [user_id, item_variant_id, quantity]);
        return result.insertId;
    }

    static async update(id, { user_id, item_variant_id, quantity }) {
        const query = `UPDATE cart SET user_id = ?, item_variant_id = ?, quantity = ? 
                       WHERE id = ?`;
        const [result] = await db.execute(query, [user_id, item_variant_id, quantity, id]);
        return result.affectedRows;
    }

    static async delete(id) {
        const query = "DELETE FROM cart WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
    
    
    
    
    
    static async updateQty(id,data,userId) {
      console.log(id,data,userId);
          const query = "UPDATE cart SET quantity = ?  WHERE id = ? and user_id = ? ";
        const [result] = await db.execute(query, [data.updateQty, id,userId]);
        return result.affectedRows;
    }
    
    
    
    
    static async clearUserCart(userId) {
    const query = "DELETE FROM cart WHERE user_id = ?";
    const [result] = await db.execute(query, [userId]);
    return result.affectedRows;
}
    
    
    
    
    
    
    
    
}
module.exports = Cart;
