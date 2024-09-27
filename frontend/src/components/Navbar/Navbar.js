// src/components/Navbar/Navbar.js
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

function Navbar({ auth, logoutUser }) {
    const authLinks = (
        <>
            <Button color="inherit" component={Link} to="/">
                Recommendations
            </Button>
            <Button color="inherit" component={Link} to="/courses">
                Courses
            </Button>
            <Button color="inherit" onClick={logoutUser}>
                Logout
            </Button>
        </>
    );

    const guestLinks = (
        <>
            <Button color="inherit" component={Link} to="/login">
                Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
                Register
            </Button>
        </>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Course Recommendation System
                </Typography>
                {auth.isAuthenticated ? authLinks : guestLinks}
            </Toolbar>
        </AppBar>
    );
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
