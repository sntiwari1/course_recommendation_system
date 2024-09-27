// src/utils/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/api",
});

// Set the Authorization header if the token exists
const token = localStorage.getItem("token");
if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Token ${token}`;
}

// Update the token when it changes
export const updateAxiosInstanceToken = (token) => {
    if (token) {
        axiosInstance.defaults.headers.common[
            "Authorization"
        ] = `Token ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common["Authorization"];
    }
};

export default axiosInstance;
