const CouponService = require("../services/couponService");
const { successResponse, errorResponse } = require("../../utils/response");


exports.apply_ = async (req, res) => {
    try {
        const id = await CouponService.apply_(req.body);
        return successResponse(res, id, "Coupon created successfully" );
    } catch (error) {
        return errorResponse(res, error.message||"koi to error hai ");
    }
};

