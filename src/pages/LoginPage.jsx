// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import '../styles/Login.css';
// import { useAuth } from '../context/AuthContext';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, googleProvider } from '../firebase';


// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const [error, setError] = useState('');
//   const [role, setRole] = useState('student');

//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5500/api/auth/login', {
//         email,
//         password,
//         role,
//       });

//       await login(email, password);
//       if (remember) {
//         localStorage.setItem('rememberMe', 'true');
//       }
//       localStorage.setItem('user', JSON.stringify(res.data.user));

//       const userRole = res.data.user.role;
//       if (userRole === 'student') navigate('/dashboard/student');
//       else if (userRole === 'instructor') navigate('/dashboard/instructor');
//       else if (userRole === 'admin') navigate('/dashboard/admin');
//       else navigate('/dashboard');
//     } catch (err) {
//       setError(err.response?.data?.error || 'Login failed.');
//     }
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const res = await signInWithPopup(auth, googleProvider);
//       const { displayName, email, photoURL } = res.user;

//       const response = await axios.post('http://localhost:5500/api/auth/google-login', {
//         name: displayName,
//         email,
//         photoURL,
//       });

//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       navigate('/dashboard');
//     } catch (err) {
//       setError('Google login failed');
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card glass">
//         <form className="login-form" onSubmit={handleSubmit}>
//           <h2>Login to E-Learning</h2>
//           {error && <div className="error-msg">{error}</div>}

//           <input
//             type="email"
//             placeholder="Email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <div className="password-wrapper">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               placeholder="Password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
//               {showPassword ? '🙈' : '👁️'}
//             </span>
//           </div>

//           <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
//             <option value="student">Student</option>
//             <option value="instructor">Instructor</option>
//             <option value="admin">Admin</option>
//           </select>

//           <div className="form-extras">
//             <label>
//               <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} />
//               Remember Me
//             </label>
//             <Link to="/forgot" className="forgot-link">Forgot Password?</Link>
//           </div>

//           <button type="submit" className="cta-btn">Login</button>

//           <button type="button" className="google-btn" onClick={handleGoogleLogin}>
//             Sign in with Google
//           </button>

//           <p className="switch-link">Don’t have an account?
//             <Link to="/register"> Register</Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import '../styles/Login.css';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const user = await login(email, password);
      if (user) {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError('');
    setIsLoading(true);

    try {
      const user = await loginWithGoogle();
      if (user) {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Google sign-in failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="welcome-text">
          <h2>Welcome back 👋</h2>
          <p>Empowering People, Empowering Workplaces.</p>
        </div>

        {error && <div className="login-error">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
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

          <div className="options-row">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
            <Link to="/forgot-password" className="link">Forgot Password?</Link>
          </div>

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Login'}
          </button>

          <div className="or-divider">OR</div>

          <button
            type="button"
            className="btn-google"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            Sign in with Google
          </button>

          <p className="signup-text">
            Don’t have an account? <Link to="/register" className="link">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
