// src/components/Courses/CourseList.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../../actions/courseActions";
import CourseItem from "./CourseItem";
import SearchBar from "../Search/SearchBar";

function CourseList({ courses, fetchCourses }) {
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    return (
        <div>
            <h2>All Courses</h2>
            <SearchBar />
            {courses.map((course) => (
                <CourseItem key={course.id} course={course} />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    courses: state.course.courses,
});

export default connect(mapStateToProps, { fetchCourses })(CourseList);
