const db = require("../../config/db");

class Aaddresses {
    static async getAll({ page = 1, limit = 10, sortBy = "created_at", order = "DESC" }) {
      
        const offset = (page - 1) * limit;
        const validSortBy = ["created_at", "order_id", "city", "state"];
        const validOrder = ["ASC", "DESC"];

        if (!validSortBy.includes(sortBy)) sortBy = "created_at";
        if (!validOrder.includes(order)) order = "DESC";

        const query = `SELECT * FROM addresses ORDER BY ${sortBy} ${order} LIMIT ? OFFSET ?`;
        const [results] = await db.execute(query, [limit, offset]);
        
        return results;
    }

    static async getById(id) {
        const query = "SELECT * FROM addresses WHERE id = ?";
        const [results] = await db.execute(query, [id]);
        return results.length ? results[0] : null;
    }

    static async getByIdForUpdate(id) {
        return this.getById(id);
    }

    static async create({  address="", city="", state="6", pincode="7" }) {
        const query = `INSERT INTO addresses ( address, city, state, pincode) 
                       VALUES (?, ?, ?, ?)`;
        const [result] = await db.execute(query, [address, city, state, pincode]);
        return result.insertId;
    }

    static async update(id, { order_id, address, city, state, pincode,  }) {
        const query = `UPDATE addresses SET  address = ?, city = ?, state = ?, pincode = ?, 
                        WHERE id = ?`;
        const [result] = await db.execute(query, [address, city, state, pincode,  id]);
        return result.affectedRows;
    }

    static async delete(id) {
        const query = "DELETE FROM addresses WHERE id = ?";
        const [result] = await db.execute(query, [id]);
        return result.affectedRows;
    }
}

module.exports = Aaddresses;
