import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './InstructorDashboard.css'; // You can style it

export default function InstructorDashboard() {
  const [courses, setCourses] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState({});
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  const [uploadProgress, setUploadProgress] = useState(0);


  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5500/api/instructor/courses');
      setCourses(res.data);
    } catch (err) {
      console.error('Error fetching courses:', err);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles({ ...selectedFiles, [e.target.name]: e.target.files[0] });
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('title', newCourse.title);
    formData.append('description', newCourse.description);

    for (let key in selectedFiles) {
      formData.append(key, selectedFiles[key]);
    }

  try {
    await axios.post('http://localhost:5500/api/instructor/upload', formData, {
      onUploadProgress: (progressEvent) => {
        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percent);
      }
    });
  } catch (err) {
    console.error('Upload failed', err);
  }
};

  return (
    <div className="instructor-dashboard">
      <h2>Your Uploaded Courses</h2>

      <div className="upload-section">
        <input
          type="text"
          placeholder="Course Title"
          value={newCourse.title}
          onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
        />
        <textarea
          placeholder="Course Description"
          value={newCourse.description}
          onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
        ></textarea>

        <input
          type="text"
          placeholder="Video Link (optional)"
          value={newCourse.videoLink || ''}
          onChange={(e) => setNewCourse({ ...newCourse, videoLink: e.target.value })}
        />

        {/* File input (optional) */}
        <input type="file" name="video" accept="video/*" onChange={handleFileChange} />

        {/* Progress Bar */}
        {uploadProgress > 0 && (
          <div className="progress-bar">
            <div style={{ width: `${uploadProgress}%`, backgroundColor: "#4caf50", height: "10px" }}></div>
          </div>
        )}

        <input type="file" name="ppt" accept=".ppt,.pptx" onChange={handleFileChange} />
        <input type="file" name="notes" accept=".pdf,.docx" onChange={handleFileChange} />
        <input type="file" name="quiz" accept=".json" onChange={handleFileChange} />

        <button onClick={handleUpload}>Upload Course</button>
      </div>

      <div className="courses-list">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>👥 Enrolled: {course.enrolledStudents?.length || 0}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
