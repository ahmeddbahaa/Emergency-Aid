import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "./global/footer";

import { FaCaretRight } from "react-icons/fa";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Home | Emergency First Aid";
    });

    return (
        <section className="home-route">
            {/* <Header /> */}
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
                                voluptatibus consequatur ducimus soluta
                                excepturi.
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
                        {/* <div className="home-services">
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
                                    place and supplies it with the necessary
                                    regelialia.
                                </Typography>
                            </div>
                            <div className="services-cards display-flex flex-row">
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Lizard
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles, with over
                                                6,000 species, ranging across
                                                all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Lizard
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles, with over
                                                6,000 species, ranging across
                                                all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Lizard
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles, with over
                                                6,000 species, ranging across
                                                all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Lizard
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles, with over
                                                6,000 species, ranging across
                                                all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div>
                        <div className="features-section display-flex flex-row">
                            <img
                                src="https://images.pexels.com/photos/8413086/pexels-photo-8413086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                className="doc-img"
                                alt="doc-img"
                            />
                            <div className="info-wrapper">
                                <Typography
                                    variant="h5"
                                    component="div"
                                    gutterBottom
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt, quod, ea eius at
                                    vero nulla ipsum hic voluptas, dignissimos
                                    similique nemo! Vel possimus dolorem animi
                                    quo. Cum architecto sapiente veniam?
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    gutterBottom
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt, quod, ea eius at
                                    vero nulla ipsum hic voluptas, dignissimos
                                    similique nemo! Vel possimus dolorem animi
                                    quo. Cum architecto sapiente veniam?
                                </Typography>
                                <Typography
                                    variant="h5"
                                    component="div"
                                    gutterBottom
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nesciunt, quod, ea eius at
                                    vero nulla ipsum hic voluptas, dignissimos
                                    similique nemo! Vel possimus dolorem animi
                                    quo. Cum architecto sapiente veniam?
                                </Typography>
                            </div>
                        </div>
                        <div className="plans-section">
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
                                    place and supplies it with the necessary
                                    regelialia.
                                </Typography>
                            </div>
                            <div className="plans-cards display-flex flex-row">
                                <Card sx={{ maxWidth: 345 }} className="card">
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Lizard
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles, with over
                                                6,000 species, ranging across
                                                all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Lizard
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles, with over
                                                6,000 species, ranging across
                                                all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Lizard
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles, with over
                                                6,000 species, ranging across
                                                all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="/static/images/cards/contemplative-reptile.jpg"
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="div"
                                            >
                                                Lizard
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Lizards are a widespread group
                                                of squamate reptiles, with over
                                                6,000 species, ranging across
                                                all continents except Antarctica
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </div> */}
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
                                    place and supplies it with the necessary
                                    regelialia.
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
