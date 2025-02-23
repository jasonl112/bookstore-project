import { useState } from "react";
import { Trash } from "lucide-react"; // Install lucide-react for icons
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity } from "../../redux/features/cart/cartSlice";
import { removeFromCart } from "../../redux/features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  console.log(cart);
  const dispatch = useDispatch();

  // Update quantity
  const updateTotal = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  // Remove item from cart
  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  // Calculate total
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateTotal(item.id, parseInt(e.target.value))
                  }
                  className="w-16 text-center border rounded-md"
                />
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t my-3"></div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link to="/checkout">
              {" "}
              <button className="w-full mt-4 bg-black text-white py-2 rounded-md hover:bg-gray-800">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
