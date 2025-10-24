import React from "react";
import { CheckCircle, CircleDot, Package, Truck } from "lucide-react";

const TrackOrder = () => {
  const orderSteps = [
    {
      title: "Order Confirmed",
      time: "January 15, 2025 - 9:30 AM",
      description: "Your order has been confirmed",
      completed: true,
    },
    {
      title: "Order Processed",
      time: "January 15, 2025 - 2:45 PM",
      description: "Your order has been processed and packed",
      completed: true,
    },
    {
      title: "In Transit",
      time: "January 16, 2025 - 10:15 AM",
      description: "Your package is on the way",
      completed: true,
    },
    {
      title: "Delivered",
      time: "Estimated: January 18, 2025",
      description: "",
      completed: false,
    },
  ];

  return (
    <div className="max-w-xl md:max-w-4xl md:flex md:gap-10 ani mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Track Order</h2>
      <p className="text-sm text-gray-600 mb-6">Order #283947</p>

      {/* Timeline */}
      <div className="border-l-2 border-gray-200 pl-4 space-y-6">
        {orderSteps.map((step, idx) => (
          <div key={idx} className="relative">
            <div className="absolute -left-6 top-1">
              {step.completed ? (
                <CheckCircle className="text-black w-5 h-5" />
              ) : (
                <CircleDot className="text-gray-400 w-5 h-5" />
              )}
            </div>
            <div>
              <h4 className="font-medium">{step.title}</h4>
              <p className="text-sm text-gray-500">{step.time}</p>
              {step.description && (
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Info */}
      <div className="mt-10 space-y-4">
        <h3 className="font-semibold text-lg">Delivery Details</h3>
        <div className="text-sm text-gray-700">
          <p className="font-medium">Delivery Address</p>
          <p>123 Main Street, Apt 4B</p>
          <p>New York, NY 10001</p>
        </div>
        <div className="text-sm text-gray-700">
          <p className="font-medium flex items-center gap-1">
            <Truck className="w-4 h-4" /> Shipping Method
          </p>
          <p>Express Delivery</p>
        </div>
        <div className="text-sm text-gray-700">
          <p className="font-medium flex items-center gap-1">
            <Package className="w-4 h-4" /> Package Details
          </p>
          <p>Weight: 0.5 kg</p>
          <p>Tracking ID: TRK283947XY</p>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;