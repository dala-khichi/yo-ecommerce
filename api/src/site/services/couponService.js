const Coupon = require("../models/Coupon");

class CouponService {
    
    static async apply_(data) {
     const  res= await Coupon.chack(data.couponCode);
     if(res?.code&&res?.code==data?.couponCode){
     const  coupon = await Coupon.getById(res?.id);
     return coupon
    }else{
       throw  new Error("coupon invalide");
    }
    
    
}

}

module.exports = CouponService;
