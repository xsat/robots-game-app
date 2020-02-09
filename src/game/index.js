import React from "react";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import {
    Achievements,
    Battle,
    Leaderboards,
    Lobby,
    Logout,
    Matchmaking,
    SignIn,
    SignUp
} from "./pages";
import {Common, Progress} from "./components";
import {PrivateRoute} from "./routes";
import Img from "react-image";

export default class Game extends Common {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isAuthorized: false
        };
    }

    connect() {
        this.gameApi.privateRequest("/v1/player").then((response) => {
            this.setState({
                isAuthorized: response.playerId !== undefined,
                isLoaded: true
            })
        }).catch(() => {
            this.setState({isAuthorized: false, isLoaded: false});
        });
    }

    render() {
        if (this.state.isLoaded === false) {
            return (
                <Progress message="Connecting" handler={() => {
                    this.connect();
                }}/>
            );
        }

        return (
            <React.Fragment>
                <BrowserRouter>
                    <Link to="/" className="logo">
                        <Img src="/images/logo.png"/> Robots Factory
                    </Link>
                    <Switch>
                        <PrivateRoute
                            exact path="/"
                            isAuthorized={this.state.isAuthorized}
                            component={Lobby}/>
                        <PrivateRoute
                            exact path="/logout"
                            isAuthorized={this.state.isAuthorized}
                            component={Logout}/>
                        <PrivateRoute
                            exact path="/logout"
                            isAuthorized={this.state.isAuthorized}
                            component={Logout}/>
                        <PrivateRoute
                            exact path="/matchmaking"
                            isAuthorized={this.state.isAuthorized}
                            component={Matchmaking}/>
                        <PrivateRoute
                            exact path="/battle"
                            isAuthorized={this.state.isAuthorized}
                            component={Battle}/>
                        <PrivateRoute
                            exact path="/achievements"
                            isAuthorized={this.state.isAuthorized}
                            component={Achievements}/>
                        <Route
                            exact path="/leaderboards/:page"
                            component={Leaderboards}/>
                        <Route
                            exact path="/leaderboards"
                            component={Leaderboards}/>
                        <Route
                            exact path="/sign-up"
                            component={SignUp}/>
                        <Route
                            exact path="/sign-in"
                            component={SignIn}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}
