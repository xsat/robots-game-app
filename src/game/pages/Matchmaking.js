import React from "react";
import {Common, Progress} from "../components";
import {Link} from "react-router-dom";
import {GAME_KEY} from "../constants";

export class Matchmaking extends Common {
    constructor(props) {
        super(props);
        this.state = {isLoaded: false};
    }

    creating() {
        this.gameApi.privateRequest(
            "/v1/player/game",
            {method: "POST"}
        ).then((response) => {
            if ((response.isStarted ?? false) && (response.gameId ?? false)) {
                this.cookies.remove(GAME_KEY);
                this.cookies.set(GAME_KEY, response.gameId);
                this.props.history.push("/battle");
            }
        }).catch(() => {
            this.setState({isLoaded: false});
        });
    }

    render() {
        if (this.state.isLoaded === false) {
            return (
                <Progress message="Matchmaking" handler={() => {
                    this.creating();
                }}/>
            );
        }

        return (
            <React.Fragment>
                <div className="breadcrumbs">
                    <Link to="/logout">Logout</Link> | <Link
                    to="/">Lobby</Link> > <h1>Matchmaking</h1>
                </div>
            </React.Fragment>
        );
    }
}