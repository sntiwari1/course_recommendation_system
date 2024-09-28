import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../../actions/courseActions";
import CourseItem from "./CourseItem";
import { Container, Typography, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";

function CourseList({ courses, fetchCourses }) {
    useEffect(() => {
        fetchCourses();
    }, [fetchCourses]);

    return (
        <Container>
            <Typography variant="h4" component="h2" gutterBottom>
                Course List
            </Typography>
            <Button
                component={Link}
                to="/add-course"
                variant="contained"
                color="primary"
                style={{ marginBottom: 20 }}
            >
                Add New Course
            </Button>
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
