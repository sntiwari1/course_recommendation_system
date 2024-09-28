// src/components/Courses/CourseList.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../../actions/courseActions";
import CourseItem from "./CourseItem";
import SearchBar from "../Search/SearchBar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function CourseList({ courses, fetchCourses }) {
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    return (
        <Container>
            <Typography variant="h4" component="h2" gutterBottom>
                All Courses
            </Typography>
            <SearchBar />
            <Grid container spacing={3}>
                {courses.map((course) => (
                    <Grid item xs={12} sm={6} md={4} key={course.id}>
                        <CourseItem course={course} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    courses: state.course.courses,
});

export default connect(mapStateToProps, { fetchCourses })(CourseList);
