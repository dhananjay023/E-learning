import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/nav.jsx';
import Footer from './components/footer.jsx';
import { LoginPage } from './pages/LoginPage.jsx';
import Register from './pages/Signup.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Courses from './pages/courses.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import InstructorDashboard from './pages/InstructorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Home from './pages/Landing.jsx';
import Contact from './pages/Contact';
import Store from './pages/Store.jsx';
import About from './pages/About.jsx'; // ✅ About Page Import

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'courses', element: <Courses /> },
      { path: 'contact', element: <Contact /> },
      { path: 'store', element: <Store /> },
      { path: 'about', element: <About /> }, // ✅ About Route Added
      {
        path: '/dashboard/student',
        element: (
          <PrivateRoute allowedRoles={['student']}>
            <StudentDashboard />
          </PrivateRoute>
        )
      },
      {
        path: 'dashboard/instructor',
        element: (
          <PrivateRoute allowedRoles={['instructor']}>
            <InstructorDashboard />
          </PrivateRoute>
        )
      },
      {
        path: 'dashboard/admin',
        element: (
          <PrivateRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </PrivateRoute>
        )
      }
    ]
  },
  { path: 'login', element: <LoginPage /> },
  { path: 'register', element: <Register /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
