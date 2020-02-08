import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Game from "./pages/game";
import Achievements from "./pages/achievements";
import Leaderboards from "./pages/leaderboards";
import Matchmaking from "./pages/matchmaking";
import Logout from "./pages/logout";
import Lobby from "./pages/lobby";
import Settings from "./pages/settings";
import Api from "./api";
import {Cookies} from "react-cookie";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null,
            isLoaded: false
        };

        this.cookies = new Cookies();
    }

    componentDidMount() {
        const response = (new Api({cookies: this.cookies})).privateRequest('/v1/player');
        response.then((response) => {
            if (response.playerId) {
                this.setState({player: response, isLoaded: true})
            } else {
                this.setState({isLoaded: true})
            }
        });
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <p>Loading...</p>
            );
        }

        console.log(this.state.player);

        return (
            <Router>
                <Switch>
                    <Route path="/logout">
                        <Logout cookies={this.cookies}/>
                    </Route>
                    <Route path="/login">
                        {this.state.player !== null
                                ? <Redirect to="/"/>
                                : <Login/>}
                    </Route>
                    <Route path="/register">
                        {this.state.player !== null
                                ? <Redirect to="/"/>
                                : <Register/>}
                    </Route>
                    <Route path="/leaderboards/:page" component={Leaderboards}/>
                    <Route path="/leaderboards" component={Leaderboards}/>
                    <Route path="/game">
                        {this.state.player === null
                                ? <Redirect to="/login"/>
                                : <Game/>}
                    </Route>
                    <Route path="/matchmaking">
                        {this.state.player === null
                                ? <Redirect to="/login"/>
                                : <Matchmaking/>}
                    </Route>
                    <Route path="/achievements">
                        {this.state.player === null
                            ? <Redirect to="/login"/>
                            : <Achievements/>}
                    </Route>
                    <Route path="/settings">
                        {this.state.player === null
                            ? <Redirect to="/login"/>
                            : <Settings/>}
                    </Route>
                    <Route path="/">
                        {this.state.player === null
                            ? <Redirect to="/login"/>
                            : <Lobby/>}
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
