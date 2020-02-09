import React from "react";
import {Common} from "../components";
import {Link} from "react-router-dom";

export class Achievements extends Common {
    render() {
        return (
            <React.Fragment>
                <p className="breadcrumbs">
                    <Link to="/logout">Logout</Link> | <Link
                    to="/">Lobby</Link> > <h1>Achievements</h1>
                </p>
            </React.Fragment>
        );
    }
}