import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
                                You can reach and talk from here to one of the
                                professional specialists who work with us and
                                are ready all day to serve you in emergency
                                situations that need rapid intervention and all
                                that matters to us is your safety.
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
                                    First aid guides, Free!
                                </Typography>
                                <Typography
                                    variant="h7"
                                    component="div"
                                    className="header2"
                                    gutterBottom
                                >
                                    Learn first aid by subscribing with us for
                                    free.
                                </Typography>
                            </div>

                            <div className="subscription-request display-flex flex-row">
                                <TextField
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                />
                                <Button variant="outlined">Subscribe</Button>
                            </div>
                        </div>
                        <div className="plans-section display-flex">
                            <div className="section-header">
                                <Typography
                                    variant="h4"
                                    component="div"
                                    className="header1"
                                    gutterBottom
                                >
                                    Want to be Expert? Pick a plan Now!
                                </Typography>
                                <Typography
                                    variant="h7"
                                    component="div"
                                    className="header2"
                                    gutterBottom
                                >
                                    We offer you many plans that suit you very
                                    much.
                                </Typography>
                            </div>

                            <div className="plans-wrapper">
                                <div className="container">
                                    <div className="cards">
                                        <div className="card">
                                            <p className="name">Basic</p>
                                            <p className="description">
                                                Here you will learn precautions
                                                and first aid from scratch to
                                                reach a good level that enables
                                                you to deal simple with
                                                emergency situations.
                                            </p>
                                            <h4 className="price">
                                                <sup className="dollar">$</sup>
                                                <span id="basic">9</span>
                                                <span className="cents">
                                                    .99
                                                </span>
                                            </h4>
                                            <p className="per" id="per">
                                                Per Month
                                            </p>
                                            <p className="long-des">
                                                This plan will enable you to
                                                learn a lot. Apply and book now
                                                and have the fun experience with
                                                us and save the lives of many
                                                lives for the people around you.
                                            </p>
                                            <div className="button-card">
                                                <button className="btn">
                                                    Order Now
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card premium">
                                            <p className="name">Premium</p>
                                            <p className="description">
                                                This plan is interesting and
                                                contains many details, as it is
                                                the largest and most complex
                                                level until you become a
                                                professional
                                            </p>
                                            <h4 className="price">
                                                <sup className="dollar">$</sup>
                                                <span id="premium">19</span>
                                                <span className="cents">
                                                    .99
                                                </span>
                                            </h4>
                                            <p className="per" id="per">
                                                Per Month
                                            </p>
                                            <p className="long-des">
                                                This plan will enable you to
                                                learn a lot. Apply and book now
                                                and have the fun experience with
                                                us and save the lives of many
                                                lives for the people around you.
                                            </p>
                                            <div className="button-card">
                                                <button className="btn">
                                                    Order Now
                                                </button>
                                            </div>
                                        </div>

                                        <div className="card">
                                            <p className="name">Premiere</p>
                                            <p className="description">
                                                If you do not want to go into
                                                all the details and you are
                                                professional enough to learn
                                                only some specific things, then
                                                from this plan you can choose a
                                                specific topic to learnز
                                            </p>
                                            <h4 className="price text">
                                                find features that suits you
                                            </h4>
                                            <p className="long-des">
                                                This plan will enable you to
                                                learn a lot. Apply and book now
                                                and have the fun experience with
                                                us and save the lives of many
                                                lives for the people around you.
                                            </p>
                                            <div className="button-card">
                                                <button className="btn">
                                                    Order Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
