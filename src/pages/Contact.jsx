import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import confetti from 'canvas-confetti';
import './Contact.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

<div className="social-icons">
  <a href="#"><FaTwitter /></a>
  <a href="#"><FaFacebookF /></a>
  <a href="#"><FaInstagram /></a>
  <a href="#"><FaLinkedin /></a>
</div>


const ContactModern = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("\u2705 Thanks! We'll contact you soon.");
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="contact-modern-wrapper">
      <Toaster />

      <div className="contact-modern-container">
        {/* Left - Form */}
        <div className="contact-modern-form">
          {submitted ? (
            <div className="thank-you-message">
              <h3>✅ Thank you!</h3>
              <p>We'll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="firstName" placeholder=" " required />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="form-group">
                <input type="text" id="lastName" placeholder=" " required />
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" placeholder=" " required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-group">
                <input type="tel" id="phone" placeholder=" " required />
                <label htmlFor="phone">Phone Number</label>
              </div>
              <div className="form-group">
                <textarea id="message" placeholder=" " rows="4" required></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="btn-submit">Submit</button>
            </form>
          )}
        </div>

        {/* Right - Info Panel */}
        <div className="contact-modern-info">
          <h2>Get in Touch</h2>
          <p>
            For More Information <br /> Contact us <br /> Follow us for more
          </p>
          <div className="social-icons">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModern;
