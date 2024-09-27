// src/components/Auth/Register.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

function Register({ registerUser, auth }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const { name, email, password } = formData;

    // Redirect if logged in
    if (auth.isAuthenticated) {
        navigate("/");
    }

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        registerUser({ name, email, password });
        // Navigate to the home page after registration
        navigate("/");
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={onSubmit}>
                    <TextField
                        label="Name"
                        name="name"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={onChange}
                        required
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={onChange}
                        required
                    />
                    <TextField
                        label="Password"
                        name="password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={onChange}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Register
                    </Button>
                </form>
                <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        style={{ textDecoration: "none", color: "#1976d2" }}
                    >
                        Login here
                    </Link>
                </Typography>
            </Box>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { registerUser })(Register);
