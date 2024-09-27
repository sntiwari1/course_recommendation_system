// src/components/Courses/CourseItem.js
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

function CourseItem({ course }) {
    return (
        <Card style={{ margin: "1em 0" }}>
            <CardContent>
                <Typography variant="h5">{course.title}</Typography>
                <Typography variant="body2">{course.description}</Typography>
            </CardContent>
        </Card>
    );
}

export default CourseItem;
