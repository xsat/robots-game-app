import React from "react";
import {Common} from "../components";
import {Redirect} from "react-router-dom";
import {TOKEN_KEY} from "../constants";

export class Logout extends Common {
    render() {
        this.cookies.remove(TOKEN_KEY);
        this.props.history.push("/sign-in");

        return (
            <Redirect to="/sign-in"/>
        );
    }
}