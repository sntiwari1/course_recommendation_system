import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchRecommendations } from "../../actions/courseActions";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import axiosInstance from "../../utils/axiosInstance";

function RecommendationList({ recommendations, fetchRecommendations }) {
    const [recs, setRecs] = useState(recommendations || []);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        if ((!recommendations || recommendations.length === 0) && !fetched) {
            setLoading(true);
            fetchRecommendations()
                .then((data) => {
                    if (data && data.recommendations) {
                        setRecs(data.recommendations);
                        setCurrentIndex(0);
                    }
                    setLoading(false);
                })
                .catch(() => setLoading(false))
                .finally(() => setFetched(true));
        } else {
            setRecs(recommendations);
        }
    }, [fetchRecommendations, recommendations, fetched]);

    const nextRecommendation = () => {
        const nextIndex = currentIndex + 1 < recs.length ? currentIndex + 1 : 0;
        setCurrentIndex(nextIndex);
    };

    const fetchNewRecommendations = () => {
        setLoading(true);
        axiosInstance
            .get("/recommendations/new")
            .then((response) => {
                if (response.data["status"] === "success") {
                    setCurrentIndex(0);
                    setRecs([]);
                    setFetched(false);
                }
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching new recommendations:", error);
                setLoading(false);
            });
    };

    return (
        <Container>
            <Typography variant="h6" component="h4" gutterBottom>
                Recommendations
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={fetchNewRecommendations}
                disabled={loading}
                style={{ marginBottom: "20px" }}
            >
                {loading ? (
                    <CircularProgress size={24} />
                ) : (
                    "New Recommendation"
                )}
            </Button>
            {recs.length > 0 ? (
                <Box
                    sx={{ marginBottom: 2 }}
                    dangerouslySetInnerHTML={{ __html: recs[currentIndex] }}
                />
            ) : (
                <Typography>No recommendations available.</Typography>
            )}
            <Button
                variant="contained"
                color="primary"
                onClick={nextRecommendation}
                disabled={recs.length === 0}
                style={{ marginBottom: "20px" }}
            >
                Next Recommendation
            </Button>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    recommendations: state.course.recommendations,
});

export default connect(mapStateToProps, { fetchRecommendations })(
    RecommendationList
);
