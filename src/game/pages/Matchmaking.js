import React from "react";
import {Common} from "../components";
import {Link} from "react-router-dom";

export class Matchmaking extends Common {
    render() {
        return (
            <React.Fragment>
                <p className="breadcrumbs">
                    <Link to="/logout">Logout</Link> | <Link
                    to="/">Lobby</Link> > <h1>Matchmaking</h1>
                </p>
            </React.Fragment>
        );
    }
}