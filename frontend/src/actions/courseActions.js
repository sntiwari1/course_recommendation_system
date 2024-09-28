// src/actions/courseActions.js
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
import {
    FETCH_RECOMMENDATIONS_SUCCESS,
    FETCH_RECOMMENDATIONS_FAIL,
} from "./types";

export const fetchRecommendations = () => (dispatch) => {
    axiosInstance
        .get("/recommendations")
        .then((res) => {
            console.log("Recommendations fetched:", res.data);
            dispatch({
                type: FETCH_RECOMMENDATIONS_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            console.error("Fetching recommendations failed:", err);
            if (err.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Error data:", err.response.data);
                console.error("Error status:", err.response.status);
                console.error("Error headers:", err.response.headers);
            } else if (err.request) {
                // The request was made but no response was received
                console.error("No response received");
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error message:", err.message);
            }
            dispatch({
                type: FETCH_RECOMMENDATIONS_FAIL,
                payload: err.response
                    ? err.response.data
                    : { error: "Network Error" },
            });
        });
};

export const fetchCourses = () => (dispatch) => {
    axiosInstance
        .get("/courses")
        .then((res) => {
            dispatch({
                type: "FETCH_COURSES_SUCCESS",
                payload: res.data,
            });
        })
        .catch((err) => {
            // Handle errors
        });
};

export const searchCourses = (query) => (dispatch) => {
    axiosInstance
        .get(`/courses/search?q=${query}`)
        .then((res) => {
            dispatch({
                type: "SEARCH_COURSES_SUCCESS",
                payload: res.data,
            });
        })
        .catch((err) => {
            // Handle errors
        });
};
