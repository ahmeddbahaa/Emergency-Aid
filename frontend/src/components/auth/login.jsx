import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { authenticateUser, clearLoginDetails } from "../../store/actions";

import Cookies from "universal-cookie";

import { RequestLoader } from "../global/form-loader";

// import logoImg from "../../resources/icons/logo-01.png";
// import logoName from "../../resources/icons/logo-02.png";

import { Formik } from "formik";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cookies = new Cookies();

    const loginRequest = useSelector((state) => state.auth.loginRequest);

    const loginError = useSelector((state) => state.auth.loginError);
    const loginErrorOccurred = useSelector(
        (state) => state.auth.loginErrorOccurred
    );

    useEffect(() => {
        document.title = "Login | Henry Golden Cinema";

        if (isUserAuthenticatedCookie()) {
            navigate("/", {
                state: {
                    elementScroll: "home-scroll",
                },
            });
        }
    });

    useEffect(() => {
        return dispatch(clearLoginDetails());
    }, [dispatch]);

    const isUserAuthenticatedCookie = () => {
        return cookies.get("isUserAuthenticated");
    };

    return (
        <section className="login-route">
            {/* <div className="reg-log-wrapper display-flex">
                <Box
                    className="logo-wrapper display-flex flex-row"
                    onClick={() =>
                        navigate("/", {
                            state: {
                                elementScroll: "home-scroll",
                            },
                        })
                    }
                >
                    <img src="" className="logo-img" alt="logo-img" />
                    <img src="" className="logo-name" alt="logo-name" />
                </Box>

                <Typography
                    className="reg-log-header"
                    variant="h3"
                    component="div"
                >
                    <b>Log In</b>
                </Typography>

                <Formik
                    initialValues={{ email: "", password: "", keepLogged: "" }}
                    validate={(values) => {
                        const errors = {};

                        // Email Validation
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address.";
                        }

                        // Password Validation
                        if (!values.password) {
                            errors.password = "Required";
                        } else if (values.password.length < 8) {
                            errors.password =
                                "Password must be 8 characters long.";
                        }

                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        dispatch(authenticateUser(values));

                        setTimeout(() => {
                            setSubmitting(false);
                        }, 2000);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} className="form-1">
                            <div className="form-wrapper display-flex">
                                <input
                                    placeholder="Email"
                                    autoComplete="off"
                                    type="text"
                                    name="email"
                                    required
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <span>
                                    {errors.email &&
                                        touched.email &&
                                        errors.email}
                                </span>
                                <input
                                    placeholder="Password"
                                    autoComplete="off"
                                    name="password"
                                    required
                                    type="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                />
                                <span>
                                    {errors.password &&
                                        touched.password &&
                                        errors.password}
                                </span>
                            </div>

                            <div className="form-submission display-flex">
                                {loginRequest ? <RequestLoader /> : null}

                                {loginErrorOccurred && !loginRequest ? (
                                    <Typography
                                        variant="h6"
                                        component="span"
                                        gutterBottom
                                    >
                                        {loginError}
                                    </Typography>
                                ) : null}

                                <div className="keep-logged display-flex flex-row">
                                    <Checkbox
                                        name="keepLogged"
                                        onBlur={handleBlur}
                                        value={values.keepLogged}
                                        onChange={handleChange}
                                        inputProps={{
                                            "aria-label": "Checkbox demo",
                                        }}
                                    />
                                    <Typography
                                        variant="h7"
                                        gutterBottom
                                        component="span"
                                    >
                                        <b>Keep me Logged in</b>
                                    </Typography>
                                </div>

                                <button
                                    className="btn-1"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    Log In
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>

                <div className="login-contact-us display-flex">
                    <Typography variant="h7" component="div">
                        <b>Contact us in</b>
                    </Typography>

                    <div className="social-container">
                        <Button
                            className="social-btn"
                            onClick={() =>
                                window.open(
                                    "https://www.facebook.com/HeNaRyAzEr",
                                    "_blank"
                                )
                            }
                        >
                            <FaFacebookF className="social-icon" />
                        </Button>
                        <Button
                            className="social-btn"
                            onClick={() =>
                                window.open(
                                    "https://github.com/Henry-Azer",
                                    "_blank"
                                )
                            }
                        >
                            <FaGithub className="social-icon" />
                        </Button>
                        <Button
                            className="social-btn"
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/henry-azer-1220121a7",
                                    "_blank"
                                )
                            }
                        >
                            <FaLinkedinIn className="social-icon" />
                        </Button>
                    </div>
                </div>

                <div className="reg-log-navigation">
                    <Typography variant="h7" component="div">
                        <b>Don't have account?</b>
                    </Typography>
                    <button
                        className="btn-1"
                        onClick={() => navigate("/register")}
                    >
                        Join us now!
                    </button>
                </div>
            </div> */}
        </section>
    );
};

export default Login;
