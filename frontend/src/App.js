import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Navbar/Navbar";
import RecommendationList from "./components/Recommendations/RecommendationList";
import CourseList from "./components/Courses/CourseList";
import AddCourseForm from "./components/Courses/AddCourseForm"; // Adjust the import path as necessary

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/recommendations"
                    element={<RecommendationList />}
                />
                <Route path="/courses" element={<CourseList />} />
                <Route path="/add-course" element={<AddCourseForm />} />
            </Routes>
        </Router>
    );
}

export default App;
