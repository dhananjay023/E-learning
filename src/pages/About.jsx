import React from 'react';
import './Landing.css'; // Reusing the same theme styles

const About = () => {
  return (
    <div className="landing fade-in">
      <section className="hero slide-up">
        <h1>
          <span className="highlight">🚀 About</span> SkillBridge
        </h1>
        <p className="subtitle">Empowering Learners. Enabling Futures.</p>
        <p className="description">
          At SkillBridge, we’re on a mission to bridge the gap between passion and profession.
          Whether you're starting out or leveling up, we provide top-quality courses, expert guidance,
          and a supportive community to help you succeed in the world of tech and design.
        </p>
      </section>

      <section className="benefits-section slide-up">
        <div className="benefits-header">
          <h2>Why We Exist</h2>
          <p>
            We believe education should be accessible, engaging, and effective. Our platform was built with a single goal:
            to help learners build real-world skills through structured learning paths and hands-on projects.
          </p>
        </div>

        <div className="benefits-grid">
          {[
            { title: 'Accessible Education', desc: 'We provide high-quality content that’s affordable and flexible for all learners.' },
            { title: 'Industry Experts', desc: 'Learn directly from professionals working at top tech and design companies.' },
            { title: 'Community Driven', desc: 'Get support from fellow learners and collaborate on projects and ideas.' },
            { title: 'Practical Learning', desc: 'Our courses focus on building real projects that you can showcase in your portfolio.' },
            { title: 'Always Evolving', desc: 'We continuously update content to match industry trends and demands.' },
            { title: 'Learn Your Way', desc: 'Self-paced, mentor-guided, or live – pick the path that fits your style.' },
          ].map((item, index) => (
            <div className="benefit-card fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="benefit-number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="view-icon">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section slide-up">
        <div className="testimonials-header">
          <h2>Meet The Visionaries</h2>
          <p>SkillBridge is built by passionate educators, developers, and designers who believe in making learning fun and impactful.</p>
        </div>

        <div className="testimonials-grid">
          {[
            {
              name: 'Neha Sharma',
              text: 'Head of Product & Curriculum. Passionate about designing learner-first experiences.',
              img: '/assets/founder1.jpg'
            },
            {
              name: 'Karan Mehta',
              text: 'Co-founder & Lead Developer. Loves building tech that makes education accessible.',
              img: '/assets/founder2.jpg'
            },
            {
              name: 'Simran Arora',
              text: 'Design Lead. Ensures every screen feels intuitive, vibrant, and motivating.',
              img: '/assets/founder3.jpg'
            }
          ].map((person, i) => (
            <div className="testimonial-card fade-in" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <p className="testimonial-text">“{person.text}”</p>
              <div className="testimonial-footer">
                <img src={person.img} alt={person.name} />
                <span className="testimonial-name">{person.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner slide-up">
        <h2>Be Part of Our Journey</h2>
        <p>Join us in reshaping online education – one learner at a time.</p>
        <button className="cta-btn">Start Learning Today</button>
      </section>
    </div>
  );
};

export default About;
