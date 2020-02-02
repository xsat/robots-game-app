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
import Logout from "./pages/logout";
import Lobby from "./pages/lobby";
import {Cookies} from "react-cookie";
import Settings from "./pages/settings";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null,
            isLoaded: false
        };
    }

    async componentDidMount() {
        const token = (new Cookies()).get('token');
        const response = await fetch('http://robots-game-api.local/v1/player', {
            method: 'GET',
            mode: 'cors',
            headers: {Authorization: 'Bearer ' + token}
        });
        const json = await response.json();

        if (json.playerId) {
            this.setState({player: json, isLoaded: true})
        } else {
            this.setState({isLoaded: true})
        }

    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <p>Loading...</p>
            );
        }

        return (
            <Router>
                <Switch>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/leaderboards" component={Leaderboards}/>
                    <Route path="/game">
                        {
                            this.state.player == null
                                ? <Redirect to="/login"/>
                                : <Game/>
                        }
                    </Route>
                    <Route path="/achievements">
                        {this.state.player == null
                            ? <Redirect to="/login"/>
                            : <Achievements/>}
                    </Route>
                    <Route path="/settings">
                        {this.state.player == null
                            ? <Redirect to="/login"/>
                            : <Settings/>}
                    </Route>
                    <Route path="/">
                        {this.state.player == null
                            ? <Redirect to="/login"/>
                            : <Lobby/>}
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
