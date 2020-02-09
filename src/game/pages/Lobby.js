import React from "react";
import {Link} from "react-router-dom";

export class Lobby extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Lobby</h1>
                <Link to="/logout">Logout</Link>
                <menu>
                    <ul>
                        <li>
                            <Link to="/matchmaking">Matchmaking</Link>
                        </li>
                        <li>
                            <Link to="/achievements">Achievements</Link>
                        </li>
                        <li>
                            <Link to="/leaderboards">Leaderboards</Link>
                        </li>
                    </ul>
                </menu>
            </React.Fragment>
        );
    }
}