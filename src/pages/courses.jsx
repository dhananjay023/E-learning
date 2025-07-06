import React from "react";
import "./Courses.css";

const Courses = () => {
  const lessons = [
    {
      title: "AWS Certified Solutions Architect",
      author: "Lina",
      progress: "Lesson 5 of 7",
      image: "https://img.freepik.com/free-vector/flat-abstract-wireframe-background_23-2149021230.jpg?semt=ais_items_boosted&w=740",
    },
    {
      title: "Frontend Development",
      author: "Lina",
      progress: "Lesson 3 of 6",
      image: "https://img.freepik.com/free-vector/flat-abstract-wireframe-background_23-2149021230.jpg?semt=ais_items_boosted&w=740",
    },
    {
      title: "DevOps Essentials",
      author: "Lina",
      progress: "Lesson 2 of 5",
      image: "https://img.freepik.com/free-vector/flat-abstract-wireframe-background_23-2149021230.jpg?semt=ais_items_boosted&w=740",
    },
  ];

  const categories = [
    { title: "Design", color: "#D1FAE5", icon: "✏️" },
    { title: "Development", color: "#E0E7FF", icon: "💻" },
    { title: "Marketing", color: "#FDE68A", icon: "📈" },
    { title: "Photography", color: "#FECACA", icon: "📷" },
  ];

  return (
    <div className="container">
      <section className="welcome">
        <div className="welcome-header">
          <h2 className="welcome-title">Welcome back, ready for your next lesson?</h2>
          <a href="#" className="history-link">View history</a>
        </div>

        <div className="lessons-grid">
          {lessons.map((lesson, index) => (
            <div key={index} className="lesson-card">
              <img src={lesson.image} alt={lesson.title} className="lesson-image" />
              <div className="lesson-content">
                <h3 className="lesson-title">{lesson.title}</h3>
                <div className="lesson-footer">
                  <div className="author">
                    <img
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000"
                      alt={lesson.author}
                      className="author-img"
                    />
                    <span>{lesson.author}</span>
                  </div>
                  <span className="progress">{lesson.progress}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="categories">
        <h2 className="categories-title">Choose your favourite course from top categories</h2>
        <div className="categories-grid">
          {categories.map((cat, i) => (
            <div key={i} className="category-card">
              <div className="icon-box" style={{ backgroundColor: cat.color }}>
                <span className="icon">{cat.icon}</span>
              </div>
              <h3 className="category-title">{cat.title}</h3>
              <p className="category-desc">
                Explore content tailored to {cat.title.toLowerCase()} learners.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
