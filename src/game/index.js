import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Leaderboards, Lobby, Logout, SignIn, SignUp} from "./pages";
import {Common, Progress} from "./components";
import {PrivateRoute} from "./routes";

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
