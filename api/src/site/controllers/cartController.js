const CartService = require("../services/cartService");
const { successResponse, errorResponse } = require("../../utils/response");

exports.getAll = async (req, res) => {
    try {
        const cartItems = await CartService.getAll(req.query,req?.user?.id);
       
        return successResponse(res,cartItems, "Cart items fetched successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
exports.getTotalPrice = async (req, res) => {
    try {
        const cartItems = await CartService.getTotalPrice(req?.user?.id);
        
        return successResponse(res,cartItems, "Cart items fetched successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getById = async (req, res) => {
    try {
        const cartItem = await CartService.getById(req.params.id,req?.user?.id);
        if (!cartItem) return errorResponse(res, "Cart item not found", 404);
        return successResponse(res, cartItem,"Cart item fetched successfully", );
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.getByIdForUpdate = async (req, res) => {
    try {
        const cartItem = await CartService.getByIdForUpdate(req.params.id,req?.user?.id);
        if (!cartItem) return errorResponse(res, "Cart item not found", 404);
        return successResponse(res, "Cart item fetched successfully for update", cartItem);
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.create = async (req, res) => {
  
    try {
        const id = await CartService.create(req.body, req?.user?.id);
        return successResponse(res, "Cart item added successfully", { id });
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.update = async (req, res) => {
    try {
        const updated = await CartService.update(req.params.id, req.body,req?.user?.id);
        if (!updated) return errorResponse(res, "Cart item not found or not updated", 404);
        return successResponse(res, "Cart item updated successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};

exports.delete = async (req, res) => {
    try {
        const deleted = await CartService.delete(req.params.id,req?.user?.id);
        if (!deleted) return errorResponse(res, "Cart item not found or not deleted", 404);
        return successResponse(res, "Cart item deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};



exports.updateQty = async (req, res) => {
    try {
        const increase = await CartService.updateQty(req.params?.id,req.body,req?.user?.id);
        if (!increase) return errorResponse(res, "Cart item not found or not deleted", 404);
        return successResponse(res, "Cart item deleted successfully");
    } catch (error) {
        return errorResponse(res, error.message);
    }
};
