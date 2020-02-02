import React from "react";
import {Link} from "react-router-dom";

class Lobby extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/logout">Logout</Link>
                <h1>Lobby</h1>
                <menu>
                    <ul>
                        <li>
                            <Link to="/game">Matchmaking</Link>
                        </li>
                        <li>
                            <Link to="/achievements">Achievements</Link>
                        </li>
                        <li>
                            <Link to="/leaderboards">Leaderboards</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                    </ul>
                </menu>
            </React.Fragment>
        );
    }
}

export default Lobby;