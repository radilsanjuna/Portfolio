import React from 'react';

const About = () => {
  return (
    <section className="px-6 py-20 md:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="../src/assets/about.png" // Replace this with your image
            alt="Workspace"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Right Text Content */}
        <div>
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-gray-300 leading-relaxed mb-6">
            I focus on making sure our products are reliable, fast, and bug-free. I love diving into edge cases,
            building efficient test automation, and collaborating with teams to ship high-quality software. Outside of
            work, I'm always exploring new tools and techniques to level up our QA game.
          </p>

          {/* Sub Sections */}
          <div className="mb-4">
            <h4 className="text-white font-semibold">Skills</h4>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              <li>React</li>
              <li>Next.js</li>
              <li>Node.js</li>
              <li>JavaScript</li>
            </ul>
          </div>

          {/* You can uncomment these and fill as needed */}
          {/* 
          <div className="mb-4">
            <h4 className="text-white font-semibold">Education</h4>
            <p className="text-gray-400">Your education info here</p>
          </div>

          <div className="mb-4">
            <h4 className="text-white font-semibold">Certifications</h4>
            <p className="text-gray-400">Certification details here</p>
          </div>

          <div className="mb-4">
            <h4 className="text-white font-semibold">References</h4>
            <p className="text-gray-400">Reference details here</p>
          </div> 
          */}
        </div>
      </div>
    </section>
  );
};

export default About;
