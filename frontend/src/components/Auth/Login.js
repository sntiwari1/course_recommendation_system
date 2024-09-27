// src/components/Auth/Login.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({ loginUser, auth }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Redirect if logged in
    if (auth.isAuthenticated) {
        navigate("/");
    }

    // Define the onSubmit function
    const onSubmit = (e) => {
        e.preventDefault();
        loginUser({ email, password });
        // Navigate to the home page after login
        navigate("/");
    };

    return (
        <Container maxWidth="sm">
            <Box mt={5}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={onSubmit}>
                    <TextField
                        label="Email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(Login);
