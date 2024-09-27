// src/actions/courseActions.js
import axios from "axios";
import axiosInstance from "../utils/axiosInstance";
import {
    FETCH_RECOMMENDATIONS_SUCCESS,
    FETCH_RECOMMENDATIONS_FAIL,
} from "./types";

export const fetchRecommendations = () => (dispatch) => {
    axiosInstance
        .get("/recommendations/")
        .then((res) => {
            dispatch({
                type: FETCH_RECOMMENDATIONS_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
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
