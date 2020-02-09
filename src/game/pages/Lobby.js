import React from "react";
import {Link} from "react-router-dom";

export class Lobby extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="breadcrumbs">
                    <Link to="/logout">Logout</Link> | <h1>Lobby</h1>
                </div>
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