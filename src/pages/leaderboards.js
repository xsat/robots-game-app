import React from "react";
import {Link} from "react-router-dom";

class Leaderboards extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/">Lobby</Link>
                <h1>Leaderboards</h1>
            </React.Fragment>
        );
    }
}

export default Leaderboards;
