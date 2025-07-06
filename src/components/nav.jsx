// Navbar.jsx
import { color } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>E-LEARNING </h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/courses" style={styles.link}>Courses</Link></li>
        {/* <li><Link to="/mycourses" style={styles.link}>MyCourses</Link></li> */}
        <li><Link to="/store" style={styles.link}>Store</Link></li>
        <li><Link to="/about" style={styles.link}>About Us</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
        <li><Link to="/login" style={styles.link}>Login</Link></li>
      </ul>
    </nav>
  );
};

const styles = {

  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    height: "70px",
    // backgroundColor: "rgb(191, 178, 210)",
    // backgroundColor: " rgb(155, 115, 240)",
    backgroundColor: " #fefdff",
    // backgroundColor: "#6D28D9",
    boxShadow: "0 2px 8px rgba(104, 98, 98, 0.1)",
    zIndex: 999,
    boxSizing: "border-box",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
    fontWeight: "bold",
    display: "flex",

    background: "rgb(1, 1, 1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    whiteSpace: "nowrap",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "1.5rem",
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  link: {
    fontSize: "1rem",
    fontWeight: "bold",
    background: "rgb(0, 0, 0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textDecoration: "none",
    whiteSpace: "nowrap",
  },
};

export default Navbar;