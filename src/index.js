import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Img from 'react-image'
import './index.css';

function Messages(props) {
    const messages = props.messages;
    const className = props.className;

    return messages.map(
        function (message, index) {
            return (
                <p className={className} key={index}>
                    {message}
                </p>
            );
        }
    );
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);


        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <ul>
                    <li>
                        <label>Username</label>:
                        <input name="username" type="text"
                               value={this.state.username}
                               onChange={this.handleChange}/>
                        <Messages className="error" messages={['asdasdasd', 2, 3]}/>
                    </li>
                    <li>
                        <label>Password</label>:
                        <input name="password" type="password"
                               value={this.state.password}
                               onChange={this.handleChange}/>
                        <Messages className="error" messages={[1, 2, 3]}/>
                    </li>
                    <li>
                        <input type="submit" value="Log In"/>
                    </li>
                </ul>
            </form>
        );
    }
}

class Achievements extends React.Component  {
    render() {
        return (
            <h1>Achievements</h1>
        );
    }
}

class Leaderboards extends React.Component  {
    render() {
        return (
            <h1>Leaderboards</h1>
        );
    }
}

class Lobby extends React.Component {
    render() {
        return (
            <h1>Lobby</h1>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Img className="player" src="/models/model2.png"/>
                <Img className="player" src="/models/model1.png"/>
            </React.Fragment>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthorized: false
        };
    }

    render() {
        return (
            <Router>
                <ul>
                    <li>
                        <Link to="/">Lobby</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    <li>
                        <Link to="/leaderboards">Leaderboards</Link>
                    </li>
                    <li>
                        <Link to="/achievements">Achievements</Link>
                    </li>
                    <li>
                        <Link to="/game">Game</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/game">
                        <Game />
                    </Route>
                    <Route path="/achievements">
                        <Achievements />
                    </Route>
                    <Route path="/leaderboards">
                        <Leaderboards />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/">
                        <Lobby />
                    </Route>
                </Switch>
            </Router>
        );
    }
}


//
// function Home() {
//     return <h2>Home</h2>;
// }
//
// function About() {
//     return <h2>About</h2>;
// }
//
// function Topics() {
//     let match = useRouteMatch();
//
//     return (
//         <div>
//             <h2>Topics</h2>
//
//             <ul>
//                 <li>
//                     <Link to={`${match.url}/components`}>Components</Link>
//                 </li>
//                 <li>
//                     <Link to={`${match.url}/props-v-state`}>
//                         Props v. State
//                     </Link>
//                 </li>
//             </ul>
//
//             {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//             <Switch>
//                 <Route path={`${match.path}/:topicId`}>
//                     <Topic />
//                 </Route>
//                 <Route path={match.path}>
//                     <h3>Please select a topic.</h3>
//                 </Route>
//             </Switch>
//         </div>
//     );
// }
//
// function Topic() {
//     let { topicId } = useParams();
//     return <h3>Requested topic ID: {topicId}</h3>;
// }

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);