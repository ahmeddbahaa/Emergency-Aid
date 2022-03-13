import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Home | Emergency First Aid";
    });

    return (
        <section className="home-route">
            <div className="home-container">
                <div className="home-section">
                    <div className="section-container">
                        <div className="section-header">
                            <Typography
                                variant="h3"
                                component="div"
                                className="header1"
                                gutterBottom
                            >
                                Emergency First Aid
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                className="header2"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Tenetur quae quis architecto
                                officia similique error iure ducimus, nobis
                                rerum hic dolorum culpa reiciendis dicta? Fugit
                                voluptatibus consequatur ducimus soluta.
                            </Typography>
                        </div>
                        <Button
                            color="primary"
                            variant="outlined"
                            size="large"
                            onClick={() => navigate("/call")}
                        >
                            Get Help!
                        </Button>
                    </div>
                    <div className="home-wrapper">
                        <div className="subscription-section">
                            <div className="section-header">
                                <Typography
                                    variant="h4"
                                    component="div"
                                    className="header1"
                                    gutterBottom
                                >
                                    Our Service Keeps you carefully
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    className="header2"
                                    gutterBottom
                                >
                                    A small river named Duden flows by their
                                    place and supplies.
                                </Typography>
                            </div>

                            <div className="subscription-request display-flex flex-row">
                                <TextField
                                    id="outlined-basic"
                                    label="Outlined"
                                    variant="outlined"
                                />
                                <Button variant="outlined">Outlined</Button>
                            </div>
                        </div>
                        <div className="info-cards display-flex flex-row">
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography
                                        sx={{ fontSize: 14 }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        hrhrhrh
                                    </Typography>
                                    <Typography
                                        sx={{ mb: 1.5 }}
                                        color="text.secondary"
                                    >
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography
                                        sx={{ fontSize: 14 }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        hrhrhrh
                                    </Typography>
                                    <Typography
                                        sx={{ mb: 1.5 }}
                                        color="text.secondary"
                                    >
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography
                                        sx={{ fontSize: 14 }}
                                        color="text.secondary"
                                        gutterBottom
                                    >
                                        Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        hrhrhrh
                                    </Typography>
                                    <Typography
                                        sx={{ mb: 1.5 }}
                                        color="text.secondary"
                                    >
                                        adjective
                                    </Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
