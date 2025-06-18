import React from 'react';

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">RADIL SANJUNA</h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-400">
              About
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('projects')} className="hover:text-purple-400">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-400">
              Contact
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
