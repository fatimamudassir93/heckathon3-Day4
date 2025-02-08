"use client";

import { useCart } from "@/components/CartContext";
import Link from "next/link";
import { FaChevronUp, FaChevronDown } from "react-icons/fa"; // Import icons for up/down arrows

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0);

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity > 0) {
      updateQuantity(id, quantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[url('/cart.png.png')] bg-cover bg-center h-60 flex items-center justify-center"></header>

      <main className="max-w-7xl mx-auto px-4 py-10">
        {cart.length === 0 ? (
          <p className="text-center text-lg text-gray-700">Your cart is empty!</p>
        ) : (
          <div className="grid grid-cols-12 gap-6">
            {/* Cart Items */}
            <div className="col-span-12 md:col-span-8 bg-white p-6 shadow-md rounded-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Shopping Cart</h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-left">
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Price</th>
                    <th className="py-3 px-4">Quantity</th>
                    <th className="py-3 px-4 text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200">
                      <td className="py-4 px-4 flex items-center space-x-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <span className="font-medium text-gray-900">{item.name}</span>
                      </td>
                      <td className="py-4 px-4 text-gray-800 font-semibold">Rs. {(Number(item.price) * item.quantity).toFixed(2)}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2 border border-gray-300 rounded px-2 py-1">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            <FaChevronUp />
                          </button>
                          <span className="text-lg font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="text-gray-600 hover:text-gray-900"
                          >
                            <FaChevronDown />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 font-semibold hover:underline"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cart Summary */}
            <div className="col-span-12 md:col-span-4 bg-white p-6 shadow-md rounded-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cart Totals</h2>
              <div className="border-b border-gray-200 pb-2">
                <div className="flex justify-between py-2 text-lg font-medium">
                  <span>Total:</span>
                  <span className="text-indigo-600 font-bold">Rs. {total.toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-yellow-500 text-white py-3 rounded-md text-lg font-semibold hover:bg-yellow-600 transition">
                <Link href="/checkout">Proceed to Checkout</Link>
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;
