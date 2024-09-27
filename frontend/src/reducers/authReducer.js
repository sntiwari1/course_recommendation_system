// src/reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: {},
    token: localStorage.getItem("token"),
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
        case "REGISTER_SUCCESS":
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case "LOGOUT":
        case "AUTH_ERROR":
            localStorage.removeItem("token");
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                token: null,
            };
        default:
            return state;
    }
}
