import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-green-50">

      {/* Header */}
      <section className="py-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          About{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-indigo-600">
          SnapIt
          </span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Built to offer a simple, reliable, and enjoyable experience for everyone.
        </p>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Our Story
          </h2>

          <p className="text-gray-600 mb-4">
            SnapIt was created with the idea of keeping things simple.
            Every feature is designed to be intuitive, fast, and easy to use.
          </p>

          <p className="text-gray-600">
            We focus on clarity, performance, and thoughtful design so users
            can spend less time navigating and more time enjoying the experience.
          </p>
        </div>

        {/* Right */}
        <div className="grid gap-6">
          {[
            {
              icon: "✨",
              title: "Clean Design",
              desc: "Minimal and modern interface focused on usability.",
            },
            {
              icon: "⚡",
              title: "Smooth Experience",
              desc: "Fast interactions with instant feedback.",
            },
            {
              icon: "🛠",
              title: "Well Structured",
              desc: "Built with scalable and maintainable architecture.",
            },
            {
              icon: "🔒",
              title: "Reliable",
              desc: "Designed with stability and consistency in mind.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                {item.icon} {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 mt-16 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-gray-800">
            What We Value
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {["Simplicity", "Quality", "Consistency"].map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border hover:bg-green-50 transition"
              >
                <h3 className="text-xl font-semibold text-green-600">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    

    </div>
  );
};

export default About;
