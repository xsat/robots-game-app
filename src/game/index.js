import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Lobby, Login} from "./pages";
import {Progress} from "./components";
import {Cookies} from "react-cookie";
import {GameApi} from "./game-api";
import {PrivateRoute} from "./routes";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            isAuthorized: false
        };
        this.cookies = new Cookies();
        this.gameApi = new GameApi({cookies: this.cookies});
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
                        <PrivateRoute exact path="/"
                                      isAuthorized={this.state.isAuthorized}
                                      component={Lobby}/>
                        <Route path="/login"
                               component={Login}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Game;