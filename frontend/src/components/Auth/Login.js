import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Snackbar,
    Alert, // Alert is used for easy color coding of messages
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login({ loginUser, auth, error }) {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState("info"); // 'error', 'warning', 'info', 'success'

    const navigate = useNavigate();
    const { email, password } = credentials;

    useEffect(() => {
        if (auth.isAuthenticated) {
            setMessage("Login Successful");
            setSeverity("success");
            setOpen(true);
            setTimeout(() => navigate("/recommendations"), 600);
        }

        if (error) {
            setMessage("Wrong Password");
            setSeverity("error");
            setOpen(true);
        }
    }, [auth.isAuthenticated, error, navigate]);

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        loginUser({ email, password });
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
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
                        name="email"
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
                        Login
                    </Button>
                </form>
            </Box>
            <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
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

const mapStateToProps = (state) => ({
    auth: state.auth,
    error: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
