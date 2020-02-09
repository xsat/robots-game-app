import React from "react";
import {Form} from "./Form";
import {Link} from "react-router-dom";

export class SignUp extends Form {
    constructor(props) {
        super(props);
        this.action = "/v1/player";
    }

    render() {
        return (
            <React.Fragment>
                <h1>Sign Up</h1>
                <Link to="/sign-in">Sign In</Link>
                {super.render()}
            </React.Fragment>
        );
    }
}