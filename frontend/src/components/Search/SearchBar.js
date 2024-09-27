// src/components/Search/SearchBar.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { searchCourses } from "../../actions/courseActions";

function SearchBar({ searchCourses }) {
    const [query, setQuery] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        searchCourses(query);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default connect(null, { searchCourses })(SearchBar);
