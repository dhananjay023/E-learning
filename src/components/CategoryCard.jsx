import React from "react";
import "./CategoryCard.css";

const CategoryCard = ({ title, color, icon }) => {
  return (
    <div className="category-card">
      <div
        className="icon-box"
        style={{ backgroundColor: color }}
      >
        <span className="icon">{icon}</span>
      </div>
      <h3>{title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default CategoryCard;
