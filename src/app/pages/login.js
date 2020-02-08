import React from "react";
import Messages from "../messages";
import {Cookies} from "react-cookie";
import {Link, Redirect} from "react-router-dom";
const apiUrl = 'http://robots-game-api.local';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            token: '',
            errors: {
                username: [],
                password: []
            }
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
        fetch(apiUrl + '/v1/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(function (response) {
            return response.json();
        }).then((response) => {
            if (response.messages ?? false) {
                let errors = {
                    username: [],
                    password: []
                };

                response.messages.map(function (message) {
                    errors[message.field].push(message.message);

                    return message;
                });

                this.setState({errors: errors});
            } else if (response.token ?? false) {
                this.setState({
                    token: response.token,
                    errors: {
                        username: [],
                        password: []
                    }
                });

            }
        }).catch(console.log);

        event.preventDefault();
    }

    render() {
        if (this.state.token !== '') {
            let cookies = new Cookies();


            cookies.remove('token');
            cookies.set('token', this.state.token);

            return <Redirect to='/'/>
        }

        return (
            <React.Fragment>
                <Link to="/register">Sign Up</Link> | <Link
                to="/leaderboards">Leaderboards</Link>
                <h1>Sign In</h1>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <label>Username</label>:
                            <input name="username" type="text"
                                   value={this.state.username}
                                   onChange={this.handleChange}/>
                            <Messages className="error"
                                      messages={this.state.errors.username}/>
                        </li>
                        <li>
                            <label>Password</label>:
                            <input name="password" type="password"
                                   value={this.state.password}
                                   onChange={this.handleChange}/>
                            <Messages className="error"
                                      messages={this.state.errors.password}/>
                        </li>
                        <li>
                            <input type="submit" value="Sign In"/>
                        </li>
                    </ul>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;
