// App.js or wherever your routing is defined

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar/Navbar";
import RecommendationList from "./components/Recommendations/RecommendationList";
import CourseList from "./components/Courses/CourseList";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/recommendations"
                    element={<RecommendationList />}
                />
                <Route path="/courses" element={<CourseList />} />
            </Routes>
        </Router>
    );
}

export default App;
