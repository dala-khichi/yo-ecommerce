import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Yo from "../../Part/Utility/Axios";
import img from "../../Image/Items/8f1847c9-3855-4dec-af78-e8105b026390_PACH+SHOT+VOLA+CIEL+ET+VISO+(8).jpeg";

const OrderHistory = () => {
  const [activeTab, setActiveTab] = useState("All Orders");
  const [orderData, setOrderData] = useState([]);

  const getOrder = async () => {
    try {
      const res = await Yo.get("/api/site/orders");
      setOrderData(res?.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  const tabs = ["All Orders", "Processing", "Shipped", "Delivered"];

  const orders = [
    {
      id: "#283947",
      date: "January 15, 2025",
      status: "Processing",
      total: "$219.98",
      items: [
        { name: "Wireless Headphones", qty: 1, price: "$129.99", img },
        { name: "Bluetooth Speaker", qty: 1, price: "$89.99", img },
      ],
    },
    {
      id: "#283946",
      date: "January 12, 2025",
      status: "Delivered",
      total: "$269.98",
      items: [
        { name: "Smart Watch", qty: 1, price: "$249.99", img },
        { name: "Charging Cable", qty: 2, price: "$19.99", img },
      ],
    },
  ];

  return (
    <div className="py-6 px-3 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-5 text-center">My Orders</h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2  text-sm font-medium transition-all duration-200 ${
              activeTab === tab
                ? "bg-black text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Orders */}
      {orders
        .filter(
          (order) => activeTab === "All Orders" || order.status === activeTab
        )
        .map((order) => (
          <div
            key={order.id}
            className="border  mb-6 shadow-sm hover:shadow-md transition-all duration-300 bg-white overflow-hidden"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center bg-gray-50 px-5 py-3 border-b">
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-medium text-gray-800">Order:</span>{" "}
                  {order.id}
                </p>
                <p className="text-xs text-gray-400">{order.date}</p>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  order.status === "Delivered"
                    ? "bg-green-100 text-green-700"
                    : order.status === "Processing"
                    ? "bg-yellow-100 text-yellow-700"
                    : order.status === "Shipped"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* Items */}
            <div className="divide-y">
              {order.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-all"
                >
                  <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden border">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.qty} × {item.price}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900">{item.price}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-5 py-3 bg-gray-50 border-t">
              <p className="text-sm text-gray-600">
                Total:{" "}
                <span className="font-semibold text-gray-900">
                  {order.total}
                </span>
              </p>

              <Link to="/account/track-order">
                <button className="text-sm text-blue-600 font-medium hover:underline">
                  Track Order
                </button>
              </Link>
            </div>
          </div>
        ))}

      {orders.length === 0 && (
        <div className="text-center text-gray-500 text-sm mt-10">
          No orders found.
        </div>
      )}
    </div>
  );
};

export default OrderHistory;