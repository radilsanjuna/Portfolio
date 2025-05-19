import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-20 md:px-16 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p className="text-gray-400 mb-10">
          I'm currently open to freelance work or full-time opportunities. Feel free to reach out!
        </p>

        <div className="flex justify-center gap-8 mb-6">
          {/* Email */}
          <a
            href="mailto:radilsanjuna2001@gmail.com"
            className="text-pink-500 hover:text-white transition text-2xl"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/radilsanjuna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-white transition text-2xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/radil-sanjuna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-white transition text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Facebook */}
          <a
            href="https://web.facebook.com/radil.sanjuna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-white transition text-2xl"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
