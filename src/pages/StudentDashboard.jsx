import React, { useState } from 'react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('Beginner');

  return (
    <div className="dashboard">
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background-color: #121212;
          color: white;
        }
        .dashboard {
          display: grid;
          grid-template-columns: 80px 1fr;
          grid-template-rows: 60px 1fr;
          height: 100vh;
          grid-template-areas:
            "sidebar header"
            "sidebar main";
        }
        .sidebar {
          grid-area: sidebar;
          background: #1e1e1e;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px 0;
        }
        .sidebar img {
          width: 30px;
          margin: 10px 0;
          cursor: pointer;
        }
        .header {
          grid-area: header;
          background: #1e1e1e;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 20px;
        }
        .main {
          grid-area: main;
          padding: 20px;
          overflow-y: auto;
        }
        .section {
          background: #1e1e1e;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
        }
        .section h3 {
          margin-bottom: 10px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .progress-bar {
          background: #333;
          border-radius: 20px;
          height: 12px;
          overflow: hidden;
          margin-top: 10px;
        }
        .progress-bar-fill {
          background: #a052f7;
          height: 100%;
          width: 47%;
        }
        .calendar {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }
        .calendar span.active {
          color: #ff5e9c;
          font-weight: bold;
        }
        .course-box {
          background: #2c2c2c;
          border-radius: 12px;
          padding: 15px;
        }
        .course-box h4 {
          margin: 0 0 10px;
        }
        .course-box small {
          color: #bbb;
        }
        .tabs button {
          margin-right: 10px;
          padding: 6px 14px;
          border: none;
          border-radius: 20px;
          background: #333;
          color: white;
          cursor: pointer;
        }
        .tabs button.active {
          background: #a052f7;
        }
      `}</style>

      {/* Sidebar */}
      <div className="sidebar">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/home.png" alt="Home" />
        <img src="https://img.icons8.com/ios-filled/50/ffffff/classroom.png" alt="Courses" />
        <img src="https://img.icons8.com/ios-filled/50/ffffff/user.png" alt="Profile" />
      </div>

      {/* Header */}
      <div className="header">
        <input type="text" placeholder="Search your course..." style={{ background: '#2c2c2c', color: 'white', border: 'none', borderRadius: '20px', padding: '8px 12px' }} />
        <div>
          <span>EN</span>
          <img src="https://img.icons8.com/ios-filled/24/ffffff/bell.png" alt="Notifications" style={{ marginLeft: '20px' }} />
        </div>
      </div>

      {/* Main Dashboard */}
      <div className="main">
        <div className="grid">
          <div className="section">
            <h3>Time Spending</h3>
            <p>16 Hours this week</p>
            <div style={{ height: '100px', background: '#2c2c2c', borderRadius: '8px' }}></div>
          </div>

          <div className="section">
            <h3>Task Progress</h3>
            <div className="tabs">
              {['Beginner', 'Intermediate', 'Advanced'].map(tab => (
                <button
                  key={tab}
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => setActiveTab(tab)}>
                  {tab}
                </button>
              ))}
            </div>
            <p>47% Completed</p>
            <div className="progress-bar">
              <div className="progress-bar-fill"></div>
            </div>
            <p>Lessons: 16 | Complete: 11 | On Progress: 24</p>
          </div>

          <div className="section">
            <h3>My Profile</h3>
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" style={{ width: '80px', borderRadius: '50%' }} />
            <p>Sekar Maulida<br />Student</p>
            <div className="calendar">
              {[14, 15, 16, 17, 18].map(day => (
                <span key={day} className={day === 17 ? 'active' : ''}>{day}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="section">
          <h3>My Course</h3>
          <div className="grid">
            <div className="course-box">
              <h4>Alphabet & Script</h4>
              <small>45 min • 3 lessons</small>
            </div>
            <div className="course-box">
              <h4>New Pronunciation</h4>
              <small>55 min • 3 lessons</small>
            </div>
            <div className="course-box">
              <h4>Tones Pronunciation</h4>
              <small>30 min • 2 lessons</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
