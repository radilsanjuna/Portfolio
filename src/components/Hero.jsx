import React from "react";

const Hero = () => {
  return (
    <section className="pt-60 pb-16 px-6 md:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello, <span className="text-pink-500">I'm</span>
            <br /> Radil Sanjuna
          </h1>

          <p className="mt-4 text-lg text-gray-300">Software Engineer</p>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-2 bg-pink-600 rounded-full text-white font-medium hover:bg-pink-700 transition">
              Contact Me
            </button>

            {/* Anchor tag used instead of button to go directly to the PDF */}
            <a
              href="../src/assets/Radil CV.pdf" // make sure this path is correct
              className="px-6 py-2 border border-white rounded-full text-white font-medium hover:bg-white hover:text-black transition inline-block"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right Side (Image aligned to right corner) */}
        <div className="flex-1 flex justify-end">
          <img
            src="../src/assets/pro-pic.jpg"
            alt="Avatar"
            className="w-64 h-64 rounded-full object-cover border-4 border-pink-500 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
