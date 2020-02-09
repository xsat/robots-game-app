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
                <div className="breadcrumbs">
                    <Link to="/sign-up">Sign Up</Link> | <h1>Sign In</h1>
                </div>
                {super.render()}
            </React.Fragment>
        );
    }
}