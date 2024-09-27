// src/App.js
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes />
        </Router>
    );
}

export default App;
