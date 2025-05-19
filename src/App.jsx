import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


function App() {
  return(
<div className="bg-white text-black min-h-screen">


      <Navbar />
      <Hero />
       <About />
       <Projects />
       <Contact />
      {/* Next sections go here: Hero, Stats, About, Projects, Contact */}
    </div>
  );
}

export default App
