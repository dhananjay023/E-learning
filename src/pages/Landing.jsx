import React, { useState } from 'react';
import BlurText from './BlurText';


import './Landing.css';
import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaRegClock,
  FaUsers,
  FaCheckCircle,
  FaTimesCircle,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import RotatingText from './RotatingText';

const Landing = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isYearly, setIsYearly] = useState(false);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleTogglePricing = (type) => {
    setIsYearly(type === 'yearly');
  };

  const getPrice = (base) => {
    return isYearly ? `$${base * 10}/year` : `$${base}`;
  };

  const faqData = [
    {
      question: "Can I enroll in multiple courses at once?",
      answer: "Yes! You can enroll in as many courses as you like and access them anytime."
    },
    {
      question: "What kind of support can I expect from instructors?",
      answer: "You'll receive timely help via discussion boards and direct messaging with instructors."
    },
    {
      question: "Are the courses self-paced?",
      answer: "Absolutely! You can progress through each course at your own speed."
    },
    {
      question: "Are there any prerequisites?",
      answer: "Most beginner-level courses don't have prerequisites, but some advanced courses may require prior knowledge."
    },
    {
      question: "Can I download course materials?",
      answer: "Yes, most courses offer downloadable resources like PDFs, code samples, and templates."
    }
  ];

  return (
    <div className="landing fade-in">
      <section className="hero slide-up">
        <h1 className="text-4xl sm:text-5xl font-bold flex flex-wrap items-center justify-center gap-2 text-center sm:text-left">
          <span className='unlock'>
            ⚡ Unlock
          </span>
          <div className="min-h-[3.5rem] highlight bg-purple-300 text-black px-4 py-2 rounded-lg whitespace-nowrap">
            <RotatingText
              texts={[
                "Creative Potential",
                "Design Brilliance",
                "Technical Genius",
                "Development Skills",
                "Software Wizardry",

              ]}
              mainClassName="inline-flex items-center"
              staggerFrom="last"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              staggerDuration={0.09}
              splitLevelClassName="overflow-hidden"
              elementLevelClassName="font-bold text-black"
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              rotationInterval={2000}
              splitBy="words"
              auto
            />
          </div>
        </h1>

        <p className="subtitle">with Online Design and Development Courses.</p>
        <p className="description">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
        <div className="hero-buttons">
          <button className="explore">Explore Courses</button>
          <button className="pricing">View Pricing</button>
        </div>
      </section>

      <section className="brands fade-in">
        <div className="brand-logos">
          <span>zapier</span>
          <span>Spotify</span>
          <span>zoom</span>
          <span>amazon</span>
          <span>Adobe</span>
          <span>Notion</span>
          <span>NETFLIX</span>
        </div>
      </section>

      <section className="benefits-section slide-up">
        <div className="benefits-header">
          <BlurText
            text="Benefits of our courses "
            delay={200}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl font-bold mb-2"
          />


          {/* <p>Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et...</p> */}
        </div>

        <div className="benefits-grid">
          {["Flexible Learning Schedule", "Expert Instruction", "Diverse Course Offerings", "Updated Curriculum", "Practical Projects and Assignments", "Interactive Learning Environment"].map((title, index) => (
            <div className="benefit-card fade-in" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="benefit-number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
              <h3>{title}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
              <span className="view-icon">↗</span>
            </div>
          ))}
        </div>

        <section className="testimonials-section slide-up">
          <div className="testimonials-header">
            <h2>What Our Learners Say</h2>
            <p>Real experiences from our community of developers, designers, and creators.</p>
          </div>

          <div className="testimonials-grid">
            {[{
              name: 'Aarav S.',
              text: 'SkillBridge helped me land my first frontend job. The projects and feedback were top-notch!',
              img: '/assets/user1.webp'
            }, {
              name: 'Meera K.',
              text: 'Loved the UX course! It was so interactive and the instructors were incredibly supportive.',
              img: '/assets/user2.jpeg'
            }, {
              name: 'Ravi T.',
              text: 'Courses are concise, practical, and industry-relevant. Highly recommend the mobile dev track!',
              img: '/assets/user3.webp'
            }].map((t, i) => (
              <div className="testimonial-card fade-in" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <p className="testimonial-text">“{t.text}”</p>
                <div className="testimonial-footer">
                  <img src={t.img} alt={t.name} />
                  <span className="testimonial-name">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="pricing-section slide-up">
        <div className="pricing-header">
          <h2>Our Pricing</h2>
          <p>Choose a plan that fits your learning goals and budget.</p>
        </div>
        <div className="pricing-toggle">
          <button className={isYearly ? '' : 'active'} onClick={() => handleTogglePricing('monthly')}>Monthly</button>
          <button className={isYearly ? 'active' : ''} onClick={() => handleTogglePricing('yearly')}>Yearly</button>
        </div>
        <div className="pricing-cards">
          <div className="pricing-card fade-in">
            <div className="pricing-title">Free Plan</div>
            <div className="pricing-price">$0<span>/month</span></div>
            <ul className="pricing-features">
              <li><FaCheckCircle /> Access to selected free courses</li>
              <li><FaCheckCircle /> Limited Course materials and resources</li>
              <li><FaCheckCircle /> Basic community support</li>
              <li><FaCheckCircle /> Ad-Supported Platform</li>
              <li><FaTimesCircle /> Certification</li>
              <li><FaTimesCircle /> Early Access to New Courses and Updates</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
          <div className="pricing-card fade-in">
            <div className="pricing-title">Pro Plan</div>
            <div className="pricing-price">{getPrice(79)}<span>{isYearly ? '' : '/month'}</span></div>
            <ul className="pricing-features">
              <li><FaCheckCircle /> Unlimited access to all courses</li>
              <li><FaCheckCircle /> Unlimited Course materials and resources</li>
              <li><FaCheckCircle /> Priority instructor support</li>
              <li><FaCheckCircle /> Certification on completion</li>
              <li><FaCheckCircle /> Ad-Free Experience</li>
              <li><FaCheckCircle /> Early Access to New Courses and Updates</li>
            </ul>
            <button className="pricing-btn">Get Started</button>
          </div>
        </div>
      </section>

      <section className="faq-section slide-up">
        <div className="faq-left">
          <h2>Frequently Asked Questions</h2>
          <p>Still have questions?</p>
          <p>Contact our team at support@skillbridge.com</p>
        </div>

        <div className="faq-right">
          {faqData.map((item, i) => (
            <div className={`faq-item ${activeFAQ === i ? 'open' : ''}`} key={i}>
              <div className="faq-question" onClick={() => toggleFAQ(i)}>
                {item.question} <span>{activeFAQ === i ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              {activeFAQ === i && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner slide-up">
        <h2>Ready to take your skills to the next level?</h2>
        <p>Join thousands of learners and unlock your potential today.</p>
        <button className="cta-btn">Get Started Now</button>
      </section>
    </div>
  );
};

export default Landing;
