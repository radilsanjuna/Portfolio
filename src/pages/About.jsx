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
            Hi! I'm learning to become a Full-Stack Developer, with a strong interest in web and mobile apps.
            I’ve been building personal projects and continuously improving my skills.
          </p>

          <div className="mb-6">
            <h4 className="text-white font-semibold">Technologies I work with:</h4>

            <div className="mt-2 space-y-2 text-gray-400">
              <p><span className="font-semibold text-white">Front-End:</span> HTML, CSS, JavaScript, React</p>
              <p><span className="font-semibold text-white">Back-End:</span> PHP, JAVA, MySQL</p>
              <p><span className="font-semibold text-white">Tools:</span> Git, GitHub, WAMP, VS Code, Android Studio</p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            I often use AI tools like ChatGPT to learn faster, solve problems, and improve my code.
            I'm currently looking for an internship where I can grow, gain real-world experience,
            and learn from a team.
          </p>

          <p className="text-gray-300 leading-relaxed">Thanks for visiting my portfolio!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
