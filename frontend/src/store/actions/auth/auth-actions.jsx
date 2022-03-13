import axios from "axios";
import delayAdapterEnhancer from "axios-delay";

import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCEEDED,
    CLEAR_LOGIN_DETAILS,
} from "../types";

import Cookies from "universal-cookie";

const cookies = new Cookies();

const URL = "http://localhost:8080/api/auth";

const api = axios.create({
    adapter: delayAdapterEnhancer(axios.defaults.adapter),
});

export const authenticateUser = (values) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });

    api.post(
        `${URL}/login`,
        {
            email: values.email,
            password: values.password,
        },
        { delay: 2000 }
    )
        .then(function(response) {
            if (response.data.status === 200) {
                dispatch({
                    type: LOGIN_SUCCEEDED,
                    payload: response.data.body,
                });

                if (values.keepLogged) {
                    cookies.set("isUserAuthenticated", "true");
                    cookies.set("authToken", `${response.data.body.token}`);
                    cookies.set(
                        "authenticatedId",
                        `${response.data.body.user.id}`
                    );
                } else {
                    cookies.set("isUserAuthenticated", "true", {
                        maxAge: "14400",
                    });
                    cookies.set("authToken", `${response.data.body.token}`, {
                        maxAge: "14400",
                    });
                    cookies.set(
                        "authenticatedId",
                        `${response.data.body.user.id}`,
                        {
                            maxAge: "14400",
                        }
                    );
                }
            } else {
                dispatch({
                    type: LOGIN_FAILURE,
                    payload: response.data.message,
                });
            }
        })
        .catch(function(error) {
            console.log(error);
        });
};

export function clearLoginDetails() {
    return {
        type: CLEAR_LOGIN_DETAILS,
        payload: null,
    };
}
