// src/components/Recommendations/RecommendationList.js
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecommendations } from "../../actions/courseActions";
import CourseItem from "../Courses/CourseItem";

function RecommendationList({ recommendations, fetchRecommendations }) {
    useEffect(() => {
        fetchRecommendations();
    }, [fetchRecommendations]);

    return (
        <div>
            <h2>Recommended Courses</h2>
            {recommendations.map((course) => (
                <CourseItem key={course.id} course={course} />
            ))}
        </div>
    );
}

const mapStateToProps = (state) => ({
    recommendations: state.course.recommendations,
});

export default connect(mapStateToProps, { fetchRecommendations })(
    RecommendationList
);
