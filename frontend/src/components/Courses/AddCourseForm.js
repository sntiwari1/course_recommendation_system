import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Snackbar,
    Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";

function AddCourseForm() {
    const [course, setCourse] = useState({
        title: "",
        description: "",
    });
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("info");

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCourse((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axiosInstance
            .post("/courses/", course)
            .then((response) => {
                setMessage("Course added successfully!");
                setSeverity("success");
                setOpen(true);
                setCourse({ title: "", description: "" });
            })
            .catch((error) => {
                setMessage("Failed to add course!");
                setSeverity("error");
                setOpen(true);
            });
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Add New Course
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="Course Title"
                        name="title"
                        value={course.title}
                        onChange={handleChange}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="description"
                        label="Course Description"
                        type="text"
                        id="description"
                        value={course.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Course
                    </Button>
                    <Button
                        component={Link}
                        to="/courses"
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 1, mb: 2 }}
                    >
                        List Courses
                    </Button>
                </Box>
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Container>
    );
}

export default AddCourseForm;
