import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">RADIL SANJUNA</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="#About" className="hover:text-purple-400">About</a></li>
          <li><a href="#projects" className="hover:text-purple-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
