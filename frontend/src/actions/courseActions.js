// src/actions/courseActions.js
import axiosInstance from "../utils/axiosInstance";
export const fetchRecommendations = () => (dispatch) => {
    return axiosInstance
        .get("/recommendations")
        .then((response) => {
            dispatch({
                type: "FETCH_RECOMMENDATIONS_SUCCESS",
                payload: response.data.recommendations,
            });
            return response.data; // Return data so it can be used in .then() in your component
        })
        .catch((error) => {
            dispatch({ type: "FETCH_RECOMMENDATIONS_ERROR", error });
            console.error("Failed to fetch recommendations:", error);
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
