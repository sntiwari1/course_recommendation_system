import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecommendations } from "../../actions/courseActions";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box"; // Import Box component for styling

function RecommendationList({ recommendations, fetchRecommendations }) {
    useEffect(() => {
        fetchRecommendations();
    }, [fetchRecommendations]);

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    return (
        <Container>
            <Typography variant="h6" component="h4" gutterBottom>
                Recommended Courses
            </Typography>
            <Paper style={{ padding: "20px", marginTop: "20px" }}>
                {recommendations ? (
                    <Box
                        dangerouslySetInnerHTML={createMarkup(recommendations)}
                    />
                ) : (
                    <Typography variant="body2" component="p">
                        No recommendations available.
                    </Typography>
                )}
            </Paper>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    recommendations: state.course.recommendations,
});

export default connect(mapStateToProps, { fetchRecommendations })(
    RecommendationList
);
