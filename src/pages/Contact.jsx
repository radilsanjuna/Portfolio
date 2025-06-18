import React, { useState } from 'react';
import '../css/Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:radilsanjuna2001@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-heading">Contact</h2>
        <p className="contact-description">
          I'm currently open to freelance work or full-time opportunities. Feel free to reach out!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="contact-input"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="contact-input"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="contact-textarea"
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="contact-button">
            Send Email
          </button>
        </form>

        <div className="contact-icons">
          <a href="mailto:radilsanjuna2001@gmail.com" aria-label="Email"><FaEnvelope /></a>
          <a href="https://github.com/radilsanjuna" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/radil-sanjuna/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="https://web.facebook.com/radil.sanjuna" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a
              href="https://wa.me/94765368062?text=Hi%20I%20visited%20your%20portfolio%20and%20wanted%20to%20connect!"//%20 is for space amd the text is query parameter
            target="_blank"// this one do is open a new browser tab
            rel="noopener noreferrer"//if you use abouve target you should use this one always to stay secure
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="contact-footer">
          &copy; {new Date().getFullYear()} Radil Sanjuna.
        </p>
      </div>
    </section>
  );
};

export default Contact;
