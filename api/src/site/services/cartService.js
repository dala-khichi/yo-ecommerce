const Cart = require("../models/Cart");


class CartService {
    static async getAll(options,userId) {
        return await Cart.getAll(options,userId);
        
    }
    static async getTotalPrice(userId) {
        return await Cart.getTotalPrice(userId);
        
    }

    static async getById(id) {
        return await Cart.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await Cart.getByIdForUpdate(id);
    }

    static async create(data,id) {
   let x=  await Cart.getByVariant_id(data.item_variant_id)
    console.log(x);
    if(x){
      return 0 ; 
    }
        return await Cart.create(data,id);
    }

    static async update(id, data) {
        return await Cart.update(id, data);
    }

    static async delete(id) {
        return await Cart.delete(id);
    }
    
    static async updateQty(id,data,userId) {
        return await Cart.updateQty(id,data,userId);
    }
}

module.exports = CartService;
