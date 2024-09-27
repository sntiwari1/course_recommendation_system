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
            const { token, user } = res.data;
            // Save token to localStorage
            localStorage.setItem("token", token);

            // Set token to Axios headers
            setAuthToken(token);
            dispatch({
                type: "LOGIN_SUCCESS",
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

export const logoutUser = () => (dispatch) => {
    axiosInstance
        .post("/auth/token/logout/")
        .then(() => {
            localStorage.removeItem("token");
            updateAxiosInstanceToken(null);
            dispatch({ type: LOGOUT });
        })
        .catch((err) => {
            // Handle error if necessary
            dispatch({
                type: AUTH_ERROR,
                payload: err.response
                    ? err.response.data
                    : { error: "Network Error" },
            });
        });
};
