import React from "react";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersAPI";
import { useAuth0 } from "@auth0/auth0-react";

const OrderPage = () => {
  const { user } = useAuth0();

  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrderByEmailQuery(user.email);

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold animate-pulse">Loading orders...</p>
      </div>
    );

  if (isError)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-red-500">
          Error fetching orders.
        </p>
      </div>
    );

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center text-gray-500">No orders found!</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order, index) => (
            <div
              key={order._id}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                  #{index + 1}
                </span>
                <h2 className="font-bold text-lg text-gray-700">
                  Order ID: {order._id}
                </h2>
              </div>

              <p className="text-gray-600">
                <span className="font-medium">Name:</span> {order.name}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Email:</span> {order.email}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> {order.phone}
              </p>
              <p className="text-gray-700 font-semibold mt-2">
                Total Price:{" "}
                <span className="text-green-600">${order.totalPrice}</span>
              </p>

              <div className="mt-3">
                <h3 className="font-semibold text-gray-700">
                  Shipping Address:
                </h3>
                <p className="text-gray-600">
                  {order.address.city}, {order.address.state},{" "}
                  {order.address.country}, {order.address.zipcode}
                </p>
              </div>

              <div className="mt-3">
                <h3 className="font-semibold text-gray-700">Products:</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {order.productIds.map((productId) => (
                    <li key={productId} className="text-gray-700">
                      {productId}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
