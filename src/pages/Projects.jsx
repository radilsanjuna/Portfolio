import React, { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    type: 'Web',
    github: 'https://github.com/radilsanjuna/Portfolio'
  },
  {
    id: 2,
    title: 'HR-System',
    type: 'Other',
    github: 'https://github.com/radilsanjuna/HR-System-'
  },
  {
    id: 3,
    title: 'Restaurant-Web',
    type: 'Web',
    github: 'https://github.com/radilsanjuna/Restaurant-Website'
  },
  {
    id: 4,
    title: 'Gym-Management-System',
    type: 'Web',
    github: 'https://github.com/radilsanjuna/Gym-Management-System'
  }
];

const filters = ['All', 'Web', 'Mobile', 'Other'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((project) => project.type === activeFilter);

  return (
    <section id="projects" className="px-6 py-20 md:px-16 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">GitHub Feed</h2>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1 rounded-full border ${
                activeFilter === filter
                  ? 'bg-pink-600 text-white'
                  : 'border-gray-600 text-gray-300'
              } hover:bg-pink-600 hover:text-white transition`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg shadow-md p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.type} Project</p>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-3 py-1 text-sm border border-pink-500 text-pink-500 rounded hover:bg-pink-600 hover:text-white transition"
              >
                View Code on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
