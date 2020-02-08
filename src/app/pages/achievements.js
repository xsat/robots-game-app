import React from "react";
import {Link} from "react-router-dom";

class Achievements extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/">Lobby</Link>
                <h1>Achievements</h1>
            </React.Fragment>
        );
    }
}

export default Achievements;
