import React from "react";
import {Link} from "react-router-dom";

export class Lobby extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Lobby</h1>
                <Link to="/logout">Logout</Link>
            </React.Fragment>
        );
    }
}