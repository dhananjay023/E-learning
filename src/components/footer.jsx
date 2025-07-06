import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const styles = {
  footer: {
    backgroundColor: "#ffffff",
    padding: "4rem 2rem 2rem",
    color: "#333",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    borderTop: "1px solid #eee",
    width: "100vw",
    marginLeft: "calc(-50vw + 50%)",
    boxSizing: "border-box",
  },
  top: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "2rem",
  },
  column: {
    minWidth: "150px",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    background: "linear-gradient(90deg,rgb(54, 55, 56),rgb(38, 38, 38))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textDecoration: "none",
  },
  link: {
    display: "block",
    marginBottom: "0.5rem",
    color: "#555",
    textDecoration: "none",
    fontSize: "0.95rem",
  },
  linkHover: {
    color: "#007cf0",
  },
  bottom: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderTop: "1px solid #eee",
    paddingTop: "1.5rem",
    marginTop: "2rem",
    fontSize: "0.85rem",
    color: "#777",
    width: "100%",
    boxSizing: "border-box",
  },
  socials: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  socialIcon: {
    fontSize: "1.2rem",
    color: "#333",
    textDecoration: "none",
  },
};



const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Top section */}
      <div style={styles.top}>
        {/* Logo + Left column */}
        <div style={styles.column}>
          <a href="/" style={styles.logo}>E-Learning</a>
          <a href="/about" style={styles.link}>About</a>
          <a href="/features" style={styles.link}>Features</a>
          <a href="/works" style={styles.link}>Works</a>
          <a href="/career" style={styles.link}>Career</a>
        </div>

        {/* Help */}
        <div style={styles.column}>
          <strong>Help</strong>
          <a href="/support" style={styles.link}>Customer Support</a>
          <a href="/delivery" style={styles.link}>Delivery Details</a>
          <a href="/terms" style={styles.link}>Terms & Conditions</a>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
        </div>

        {/* Resources */}
        <div style={styles.column}>
          <strong>Resources</strong>
          <a href="/ebooks" style={styles.link}>Free eBooks</a>
          <a href="/tutorials" style={styles.link}>Development Tutorial</a>
          <a href="/blog" style={styles.link}>How to - Blog</a>
          <a href="/youtube" style={styles.link}>Youtube Playlist</a>
        </div>

        {/* Extra Links */}
        <div style={styles.column}>
          <strong>Extra Links</strong>
          <a href="/support" style={styles.link}>Customer Support</a>
          <a href="/delivery" style={styles.link}>Delivery Details</a>
          <a href="/terms" style={styles.link}>Terms & Conditions</a>
          <a href="/privacy" style={styles.link}>Privacy Policy</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={styles.bottom}>

        <div style={styles.socials}>
             <a href="https://twitter.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
                 <FaTwitter />
             </a>
             <a href="https://facebook.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
                 <FaFacebook />
             </a>
             <a href="https://instagram.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
                <FaInstagram /> 
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" style={styles.socialIcon}>
                <FaGithub />
              </a>
        </div>

        <div>
          © Copyright 2025, All Rights Reserved by E-Learning
        </div>
      </div>
    </footer>
  );
};

export default Footer;
