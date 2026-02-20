import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../Redux/CounterSlice";

const Home = () => {
  const cartItems = useSelector(selectCartItems);
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-50">

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 text-green-700 font-medium">
            🎉 Flat 20% OFF Today
          </span>

          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
            Shop Smart with {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-indigo-600">
             SnapIt
            </span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Discover premium products, add them to your cart, and enjoy a smooth checkout experience.
          </p>

          <div className="flex justify-center gap-5">
            <Link
              to="/products"
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              🛍 Explore Products
            </Link>

            <Link
              to="/cart"
              className="px-7 py-3 rounded-xl border-2 border-indigo-500 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
            >
              🛒 View Cart
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <div className="text-4xl mb-3">🔥</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Hot Deals
            </h3>
            <p className="text-gray-600">
              Save more with amazing discounts on every product.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <div className="text-4xl mb-3">🛒</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Smart Cart
            </h3>
            <p className="text-gray-600">
              Quantity-based cart with instant price updates.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Fast Checkout
            </h3>
            <p className="text-gray-600">
              Simple, secure, and quick checkout process.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Browse Products", "Add to Cart", "Checkout"].map((step, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border hover:bg-green-50 transition"
              >
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {i + 1}
                </div>
                <p className="font-semibold text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CART PREVIEW */}
      {cartItems.length > 0 && (
        <section className="py-10">
          <div className="max-w-4xl mx-auto px-6 bg-gradient-to-r from-green-500 to-indigo-500 text-white rounded-2xl shadow-lg flex justify-between items-center">
            <p className="text-lg font-medium">
              🛒 You have <span className="font-bold">{totalQty}</span> items in your cart
            </p>
            <Link
              to="/cart"
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              Go to Cart
            </Link>
          </div>
        </section>
      )}

    
    </div>
  );
};

export default Home;
