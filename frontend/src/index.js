// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import setAuthToken from "./utils/setAuthToken";
import { LOGIN_SUCCESS } from "./actions/types";

// Set the token from localStorage when the app loads
const token = localStorage.getItem("token");
if (token) {
    setAuthToken(token);
    store.dispatch({
        type: LOGIN_SUCCESS,
        payload: { token },
    });
}

const theme = createTheme({
    // Customize your theme here
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById("root")
);
