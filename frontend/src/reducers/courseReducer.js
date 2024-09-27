// src/reducers/courseReducer.js
const initialState = {
    courses: [],
    recommendations: [],
    loading: true,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "FETCH_COURSES_SUCCESS":
            return {
                ...state,
                courses: action.payload,
                loading: false,
            };
        case "FETCH_RECOMMENDATIONS_SUCCESS":
            return {
                ...state,
                recommendations: action.payload,
                loading: false,
            };
        case "SEARCH_COURSES_SUCCESS":
            return {
                ...state,
                courses: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
