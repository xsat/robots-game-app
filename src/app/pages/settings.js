import React from "react";
import {Link} from "react-router-dom";

class Settings extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/">Lobby</Link>
                <h1>Settings</h1>
            </React.Fragment>
        );
    }
}

export default Settings;
