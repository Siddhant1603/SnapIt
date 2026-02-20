import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    orderId: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted!");
    setFormData({
      name: "",
      email: "",
      orderId: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-50 py-20">

      <div className="max-w-4xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-green-100 text-green-700 font-medium">
            💬 We're Here to Help
          </span>

          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            Contact {" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-indigo-600">
              SnapIt
            </span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about your order, delivery, or payment? Reach out to our support team anytime.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>

            <input
              type="text"
              name="orderId"
              placeholder="Order ID (Optional)"
              value={formData.orderId}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-indigo-600 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              🚀 Submit Request
            </button>

          </form>
        </div>

        {/* Support Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="font-bold text-gray-800">Email Support</h3>
            <p className="text-gray-600 text-sm">support@snapit.com</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center">
            <div className="text-3xl mb-2">📞</div>
            <h3 className="font-bold text-gray-800">Call Us</h3>
            <p className="text-gray-600 text-sm">+91 90000 00000</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition text-center">
            <div className="text-3xl mb-2">⏰</div>
            <h3 className="font-bold text-gray-800">Working Hours</h3>
            <p className="text-gray-600 text-sm">9 AM – 7 PM (Mon–Sat)</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;