// src/routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import CourseList from "./components/Courses/CourseList";
import RecommendationList from "./components/Recommendations/RecommendationList";
import RequireAuth from "./components/Auth/RequireAuth";

const AppRoutes = () => (
    <Routes>
        <Route
            path="/"
            element={
                <RequireAuth>
                    <RecommendationList />
                </RequireAuth>
            }
        />
        <Route
            path="/courses"
            element={
                <RequireAuth>
                    <CourseList />
                </RequireAuth>
            }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
);

export default AppRoutes;
