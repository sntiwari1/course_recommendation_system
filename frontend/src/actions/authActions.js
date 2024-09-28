// src/actions/authActions.js
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import axiosInstance, {
    updateAxiosInstanceToken,
} from "../utils/axiosInstance";

import { LOGOUT, AUTH_ERROR } from "./types";

export const loginUser = (credentials, history) => (dispatch) => {
    axiosInstance
        .post("/auth/token/login/", credentials)
        .then((res) => {
            const token = res.data["auth_token"];
            localStorage.setItem("token", token);
            setAuthToken(token);

            // Dispatch success action
            dispatch({
                type: "LOGIN_SUCCESS",
                payload: { token },
            });
        })
        .catch((err) => {
            console.error(
                "Login error:",
                err.response ? err.response.data : "Unknown error"
            );
            dispatch({
                type: "AUTH_ERROR",
                payload: err.response
                    ? err.response.data
                    : { error: "Network Error" },
            });
        });
};

export const registerUser = (userData, history) => (dispatch) => {
    axiosInstance
        .post("/auth/users/", userData)
        .then((res) => {
            const { token, user } = res.data;
            dispatch({
                type: "REGISTER_SUCCESS",
                payload: { token, user },
            });
            history.push("/");
        })
        .catch((err) => {
            dispatch({
                type: "AUTH_ERROR",
            });
        });
};

export const logoutUser = (navigate) => (dispatch) => {
    axiosInstance
        .post("/auth/token/logout/")
        .then(() => {
            localStorage.removeItem("token");
            updateAxiosInstanceToken(null);
            dispatch({ type: LOGOUT });
            navigate("/login"); // Redirect to login after logout
        })
        .catch((err) => {
            // Handle error if necessary
            console.error("Logout error:", err);
            dispatch({
                type: AUTH_ERROR,
                payload: err.response
                    ? err.response.data
                    : { error: "Network Error" },
            });
        });
};
