const Aaddresses = require("../models/Address");

class AddressService {
    static async getAll(options,userId) {
        return await Aaddresses.getAll(options,userId);
    }

    static async getById(id,userId) {
        return await Aaddresses.getById(id);
    }

    static async getByIdForUpdate(id,userId) {
        return await Aaddresses.getByIdForUpdate(id);
    }

    static async create(data,userId) {
        return await Aaddresses.create(data);
    }

    static async update(id, data,userId) {
        return await Aaddresses.update(id, data);
    }

    static async delete(id,userId) {
        return await Aaddresses.delete(id);
    }
}

module.exports = AddressService;
