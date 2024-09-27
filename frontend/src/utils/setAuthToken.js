// src/utils/setAuthToken.js
import { updateAxiosInstanceToken } from "./axiosInstance";

const setAuthToken = (token) => {
    updateAxiosInstanceToken(token);
};

export default setAuthToken;
