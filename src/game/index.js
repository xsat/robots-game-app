import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Lobby, Login} from "./pages";
import {Progress} from "./components";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isAuthorized: false
        };

    }

    render() {
        if (this.state.isLoading) {
            return (<Progress />);
        }

        return (
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login">
                            {this.state.isAuthorized === true
                                ? <Redirect to="/"/>
                                : <Login/>}
                        </Route>
                        <Route path="/">
                            {this.state.isAuthorized === false
                                ? <Redirect to="/login"/>
                                : <Lobby/>}
                        </Route>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

export default Game;