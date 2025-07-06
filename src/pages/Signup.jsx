// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import '../styles/Register.css';

// export default function Register() {
//   const [strength, setStrength] = useState('');
//   const [captchaQuestion, setCaptchaQuestion] = useState('');
//   const [captchaAnswer, setCaptchaAnswer] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [correctCaptcha, setCorrectCaptcha] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'student', // default to student
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Generate simple math CAPTCHA
//   useEffect(() => {
//     const a = Math.floor(Math.random() * 10);
//     const b = Math.floor(Math.random() * 10);
//     setCaptchaQuestion(`${a} + ${b} = ?`);
//     setCorrectCaptcha(a + b);
//   }, []);

//   // Password strength meter
//   useEffect(() => {
//     const calcStrength = () => {
//       if (formData.password.length > 12) return 'strong';
//       if (formData.password.length >= 8) return 'medium';
//       return 'weak';
//     };
//     setStrength(calcStrength());
//   }, [formData.password]);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     if (parseInt(captchaAnswer) !== correctCaptcha) {
//       setError('❌ CAPTCHA incorrect. Please try again.');
//       return;
//     }

//     if (formData.password.length < 8) {
//       setError('Password must be at least 8 characters.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:5500/api/auth/register', formData);
//       alert('🎉 Registered successfully!');
//       navigate('/login');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Registration failed.');
//     }
//   };

//   return (
//     <div className="register-page">
//       <div className="register-card glass">
//         <form className="register-form" onSubmit={handleSubmit}>
//           <h2>Register to E-Learning</h2>

//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             required
//             value={formData.name}
//             onChange={handleChange}
//           />

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             required
//             value={formData.email}
//             onChange={handleChange}
//           />

//           <div className="password-wrapper">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               placeholder="Password"
//               required
//               value={formData.password}
//               onChange={handleChange}
//             />
//             <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
//               {showPassword ? '🙈' : '👁️'}
//             </span>
//           </div>

//           <div className={`strength-bar ${strength}`}>
//             {strength && `Strength: ${strength}`}
//           </div>

//           <input
//             type="text"
//             placeholder={`CAPTCHA: ${captchaQuestion}`}
//             required
//             value={captchaAnswer}
//             onChange={(e) => setCaptchaAnswer(e.target.value)}
//           />

          

//           {error && <div className="error-msg">{error}</div>}

//           <button className="cta-btn" type="submit">Register</button>

//           <p className="switch-link">
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    // TODO: Replace with actual signup logic
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 1500);
  };

  const handleGoogleSignup = async () => {
    setError('');
    setIsLoading(true);

    try {
      const user = await loginWithGoogle();
      if (user) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Failed to sign up with Google. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Create your account</h2>
          <p>Join EduVerse to start your learning journey</p>
        </div>

        {error && <div className="signup-error">{error}</div>}

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <User size={18} />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <Mail size={18} />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <Lock size={18} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={toggleShowPassword}>
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <div className="input-group">
            <Lock size={18} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="options-row">
            <label>
              <input type="checkbox" required /> I agree to the
              <a href="#"> Terms</a> and <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? 'Signing up...' : 'Sign up'}
          </button>

          <div className="or-divider">OR</div>

          <button
            type="button"
            className="btn-google"
            onClick={handleGoogleSignup}
            disabled={isLoading}
          >
            Sign up with Google
          </button>

          <p className="signup-text">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
