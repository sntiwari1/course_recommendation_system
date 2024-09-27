// src/components/Auth/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ auth, children }) => {
    return auth.isAuthenticated ? children : <Navigate to="/login" />;
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
