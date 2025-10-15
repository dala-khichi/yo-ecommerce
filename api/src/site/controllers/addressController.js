const AddressService = require("../services/addressService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
    
    try {
        const addresses = await AddressService.getAll(req.query,req?.user?.id);

        return successResponse(res, "Shipping details fetched successfully", addresses);
    } catch (error) {

        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const addresses = await AddressService.getById(req.params.id,req?.user?.id);
        if (!addresses) return errorResponse(res, "Shipping detail not found", 404);
        return successResponse(res, "Shipping detail fetched successfully", addresses);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const addresses = await AddressService.getByIdForUpdate(req.params.id,req?.user?.id);
        if (!addresses) return errorResponse(res, "Shipping detail not found", 404);
        return successResponse(res, "Shipping detail fetched successfully for update", addresses);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
    try {
        const id = await AddressService.create(req.body,req?.user.id);
        return successResponse(res, "Shipping detail created successfully", { id });
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await AddressService.update(req.params.id, req.body, req?.user?.id);
        if (!updated) return errorResponse(res, "Shipping detail not found or not updated", 404);
        return successResponse(res, "Shipping detail updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await AddressService.delete(req.params.id, req?.user?.id);
        if (!deleted) return errorResponse(res, "Shipping detail not found or not deleted", 404);
        return successResponse(res, "Shipping detail deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
