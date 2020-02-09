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
                <div className="breadcrumbs">
                    <Link to="/sign-in">Sign In</Link> | <h1>Sign Up</h1>
                </div>
                {super.render()}
            </React.Fragment>
        );
    }
}