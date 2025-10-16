const db = require("../../config/db");

class Aaddresses {
    static async getAll({ page = 1, limit = 10, sortBy = "created_at", order = "DESC" },userId) {
        console.log(userId)

        const offset = (page - 1) * limit;
        const validSortBy = ["created_at", "order_id", "city", "state"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "created_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM addresses   WHERE user_id = ?  ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ? `;
        const [results] = await db.execute(query, [userId,limit, offset]);

        return results;
    }

    static async getById(id) {
        const query = "SELECT * FROM addresses WHERE id = ? ";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

   static async create({ full_name, phone_number, alternate_phone, address_line1, address_line2, city, state, pincode,select_address_type, address_type="home", is_default=0 }, userId) {
    const query = `
        INSERT INTO addresses (
            user_id, full_name, phone_number, alternate_phone, 
            address_line1, address_line2, city, state, pincode, 
            address_type, is_default
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.execute(query, [
        userId, full_name, phone_number, alternate_phone,
        address_line1, address_line2, city, state, pincode,
        select_address_type, is_default
    ]);

    return result.insertId;
}


    static async update(id, { full_name, phone_number, alternate_phone, address_line1,
         address_line2, city, state,
         pincode,select_address_type, address_type="home", is_default=0 }, userId) 
         
         {
        const query = `UPDATE addresses SET   full_name=?, phone_number=?, alternate_phone=?, address_line1=?,
         address_line2=?, city=?, state=?, pincode=?, address_type=?, is_default= ? WHERE id = ?`;
        const [result] = await db.execute(query, [
            
            userId, full_name, phone_number, alternate_phone,
        address_line1, address_line2, city, state, pincode,
        select_address_type, is_default,id
]);
        return result.affectedRows;
    }

    static async delete(id) {
        const query = "DELETE FROM addresses WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = Aaddresses;
