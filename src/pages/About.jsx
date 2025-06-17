import React, { useState } from 'react';
import '../css/About.css'; // Import your custom CSS

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <>
            <h4 className="about-subheading">Technologies I work with:</h4>
            <div className="about-tech-list">
              <p><span className="highlight">Front-End:</span> HTML, CSS, JavaScript, React</p>
              <p><span className="highlight">Back-End:</span> PHP, JAVA, MySQL</p>
              <p><span className="highlight">Tools:</span> Git, GitHub, WAMP, VS Code, Android Studio</p>
            </div>
            <p className="about-paragraph">
              I often use AI tools like ChatGPT to learn faster, solve problems, and improve my code.
              I'm currently looking for an internship where I can grow, gain real-world experience,
              and learn from a team.
            </p>
          </>
        );
      case 'education':
        return (
          <>
            <h4 className="about-subheading">Education</h4>
            <ul className="about-education-list">
              <li>Bachelor’s in Computer Science (2020–2024)</li>
              <li>Online courses: Web Development, Android Development</li>
            </ul>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="../src/assets/about.png"
            alt="Workspace"
            className="about-img"
          />
        </div>

        <div className="about-content">
          <h1 className="about-title">About Me</h1>

          <p className="about-paragraph">
            Hi! I'm learning to become a Full-Stack Developer, with a strong interest in web and mobile apps.
            I’ve been building personal projects and continuously improving my skills.
          </p>

          <div className="about-tabs">
            {['skills', 'education'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`about-tab-btn ${activeTab === tab ? 'active' : ''}`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="about-tab-content">
            {renderTabContent()}
          </div>

          <p className="about-paragraph">Thanks for visiting my portfolio!</p>
        </div>
      </div>
    </section>
  );
};

export default About;
