import React from "react";
import {BrowserRouter, Switch} from "react-router-dom";
import {Lobby, Login} from "./pages";
import {Progress} from "./components";
import {Cookies} from "react-cookie";
import {Api} from "./api";
import {PrivateRoute, PublicRoute} from "./routes";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isAuthorized: false
        };
        this.cookies = new Cookies();
        this.api = new Api({cookies: this.cookies});
    }

    connect() {
        this.api.privateRequest('/v1/player').then((response) => {
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
                        <PublicRoute path="/login"
                                     isAuthorized={this.state.isAuthorized}
                                     component={Login}/>
                        <PrivateRoute path="/"
                                      isAuthorized={this.state.isAuthorized}
                                      component={Lobby}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Game;