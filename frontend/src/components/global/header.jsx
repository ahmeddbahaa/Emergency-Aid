import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { useSelector } from "react-redux";

import Cookies from "universal-cookie";

import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const Header = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const [isUserAuthenticated] = useState(cookies.get("isUserAuthenticated"));

    const [isHamburgerOpen, setHamburgerOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    let screenWidth = window.screen.width;

    useEffect(() => {
        if (screenWidth < 1088) {
            var logo = document.getElementById("logo-wrapper");
            window.onscroll = () => {
                const logoWrapper = document.getElementById("logo-wrapper");
                if (window.scrollY > 100) {
                    logoWrapper.classList.add("logo-wrapper-collapsed");
                    logo.style.paddingLeft = "0";
                } else {
                    logoWrapper.classList.remove("logo-wrapper-collapsed");
                    logo.style.paddingLeft = "35px";
                }
            };
        }
    });

    const toggleHamburger = (toggled) => {
        var header = document.getElementById("header-section");

        if (toggled) {
            header.classList.add("header-toggle");
        } else {
            header.classList.remove("header-toggle");
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        cookies.remove("authToken");
        cookies.remove("authenticatedId");
        cookies.remove("isUserAuthenticated");
    };

    return (
        <section className="header-section" id="header-section">
            {/* <Hamburger
                size={28}
                toggled={isHamburgerOpen}
                toggle={setHamburgerOpen}
                onToggle={toggleHamburger}
            />

            <div className="header-wrapper display-flex flex-row">
                <Box
                    id="logo-wrapper"
                    className="logo-wrapper display-flex flex-row"
                    onClick={() =>
                        navigate("/", {
                            state: {
                                elementScroll: "home-scroll",
                            },
                        })
                    }
                >
                    <img src={logoImg} className="logo-img" alt="logo-img" />
                    <img src={logoName} className="logo-name" alt="logo-name" />
                </Box>

                <div className="routes-wrapper display-flex flex-row">
                    <Typography
                        variant="h6"
                        component="span"
                        onClick={() =>
                            navigate("/movies", {
                                state: {
                                    elementScroll: "movies-scroll",
                                },
                            })
                        }
                    >
                        Movies
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        onClick={() =>
                            navigate("/bookings", {
                                state: {
                                    elementScroll: "bookings-scroll",
                                },
                            })
                        }
                    >
                        Bookings
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        onClick={() =>
                            navigate("/about-us", {
                                state: {
                                    elementScroll: "about-us-scroll",
                                },
                            })
                        }
                    >
                        About us
                    </Typography>
                </div>

                <div className="user-wrapper display-flex flex-row">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/848/848006.png"
                        alt="user-icon"
                    />

                    {isUserAuthenticated ? (
                        <Typography
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            variant="h6"
                            component="span"
                        >
                            Welcome, User!
                        </Typography>
                    ) : (
                        <Typography
                            aria-controls="basic-menu"
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={handleClick}
                            variant="h6"
                            component="span"
                        >
                            Welcome, Guest!
                        </Typography>
                    )}

                    {isUserAuthenticated ? (
                        <Menu
                            id="basic-menu"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={() => logout()}>
                                Log out
                            </MenuItem>
                        </Menu>
                    ) : (
                        <Menu
                            id="basic-menu"
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            <MenuItem onClick={() => navigate("/login")}>
                                Log in
                            </MenuItem>
                            <MenuItem onClick={() => navigate("/register")}>
                                Register
                            </MenuItem>
                        </Menu>
                    )}
                </div>
            </div> */}
        </section>
    );
};

export default Header;
