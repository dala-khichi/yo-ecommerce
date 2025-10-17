import React, { useState } from "react";
import img from "../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg";
import {
  Link,
  Outlet
} from "react-router-dom";

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  const tabs = ["All Orders", "Processing", "Shipped", "Delivered"];
  const orders = [
    {
      id: "#283947",
      date: "January 15, 2025",
      product: "Wireless Headphones",
      qty: 1,
      price: "$129.99",
    },
    {
      id: "#283946",
      date: "January 12, 2025",
      product: "Smart Watch",
      qty: 1,
      price: "$249.99",
    },
  ];

  return (
    <div className="py-4  max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">My Orders</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6  justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full text-sm ${
              activeTab === tab
                ? "bg-black text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders */}
      {orders.map((order) => (
        <div key={order.id} className="border  p-4 mb-4 ">
          <p className="text-sm text-gray-500">
            Order {order.id}
            <span className="ml-2 text-gray-400">{order.date}</span>
          </p>

          <div className="flex items-center gap-4 mt-2">
            <div className="w-14 h-14 bg-gray-100 flex items-center justify-center rounded-md text-xs text-gray-500">
              <img src={img}   />
            </div>
            <div className="flex-1">
              <p className="font-medium">{order.product}</p>
              <p className="text-sm text-gray-500">Qty: {order.qty}</p>
              <p className="font-semibold">{order.price}</p>
            </div>
          </div>

<Link to="/account/track-order">
          <button className="mt-3 text-sm text-blue-600 font-medium">
            Track Order
          </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;