import React from "react";
import "./LessonCard.css";

const LessonCard = ({ title, author, progress, image }) => {
  return (
    <div className="lesson-card">
      <img src={image} alt={title} />
      <div className="lesson-content">
        <h3>{title}</h3>
        <div className="lesson-footer">
          <div className="author">
            <img
              src="https://source.unsplash.com/40x40/?portrait"
              alt={author}
              className="author-img"
            />
            <span>{author}</span>
          </div>
          <span className="progress">{progress}</span>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
