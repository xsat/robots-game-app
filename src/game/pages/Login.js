import React from "react";
import {Cookies} from "react-cookie";
import {GameApi} from "../game-api";
import {Messages} from "../components";
import {Redirect} from "react-router-dom";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            data: {},
            errors: {}
        };
        this.cookies = props.cookies ?? new Cookies();
        this.gameApi = props.gameApi ?? new GameApi({cookies: this.cookies});
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            data: Object.assign(
                {[name]: value},
                this.state.data
            )
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.gameApi.publicRequest('/v1/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.data)
        }).then((response) => {
            if (response.messages ?? false) {
                this.setState({
                    errors: Messages.convert(response.messages)
                });
            } else if (response.token ?? false) {
                this.setState({
                    token: response.token,
                    errors: {}
                });
            }
        });
    }

    render() {
        const token = this.state.token;

        if (token !== null) {
            this.cookies.remove('token');
            this.cookies.set('token', token);

            return (
                <Redirect to='/'/>
            );
        }

        return (
            <React.Fragment>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li>
                            <label>Username</label>:
                            <input name="username" type="text"
                                   value={this.state.data.username ?? ''}
                                   onChange={this.handleChange}/>
                            <Messages className="error"
                                      items={this.state.errors.username ?? []}/>
                        </li>
                        <li>
                            <label>Password</label>:
                            <input name="password" type="password"
                                   value={this.state.data.password ?? ''}
                                   onChange={this.handleChange}/>
                            <Messages className="error"
                                      items={this.state.errors.password ?? []}/>
                        </li>
                        <li>
                            <input type="submit" value="Login"/>
                        </li>
                    </ul>
                </form>
            </React.Fragment>
        );
    }
}