import React from "react";
import {Form} from "./Form";
import {Link} from "react-router-dom";

export class SignIn extends Form {
    constructor(props) {
        super(props);
        this.action = "/v1/login";
    }

    render() {
        return (
            <React.Fragment>
                <p className="breadcrumbs">
                    <Link to="/sign-up">Sign Up</Link> | <h1>Sign In</h1>
                </p>
                {super.render()}
            </React.Fragment>
        );
    }
}