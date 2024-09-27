// src/components/Auth/RequireAuth.js
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const RequireAuth = ({ auth, children }) => {
    let location = useLocation();

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(RequireAuth);
