const Aaddresses = require("../models/Address");

class AddressService {
    static async getAll(options) {
        return await Aaddresses.getAll(options);
    }

    static async getById(id) {
        return await Aaddresses.getById(id);
    }

    static async getByIdForUpdate(id) {
        return await Aaddresses.getByIdForUpdate(id);
    }

    static async create(data) {
        return await Aaddresses.create(data);
    }

    static async update(id, data) {
        return await Aaddresses.update(id, data);
    }

    static async delete(id) {
        return await Aaddresses.delete(id);
    }
}

module.exports = AddressService;
