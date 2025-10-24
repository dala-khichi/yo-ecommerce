import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";



const OrderSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      {/* Success Icon */}
      <CheckCircle2 className="text-green-600 w-20 h-20 mb-4" />

      {/* Heading */}
      <h1 className="text-2xl font-semibold mb-2">Order Placed Successfully!</h1>
      <p className="text-gray-600 max-w-sm mb-6">
        Thank you for shopping with us. Your order has been placed and is now being processed.
      </p>

      {/* Order Summary */}
      <div className="border rounded-xl shadow-sm p-5 w-full max-w-md text-left">
        <p className="text-gray-500 text-sm mb-2">Order ID</p>
        <p className="font-semibold mb-4">#283947</p>

        <div className="flex justify-between items-center border-t pt-3">
          <div>
            <p className="text-gray-500 text-sm">Estimated Delivery</p>
            <p className="font-medium">Jan 20, 2025</p>
          </div>
          <div className="text-right">
            <p className="text-gray-500 text-sm">Total Amount</p>
            <p className="font-semibold">$129.99</p>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-8">
        <Link
          to="/account/track-order"
          className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90"
        >
          Track Order
        </Link>
        <Link
          to="/"
          className="bg-gray-100 text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;