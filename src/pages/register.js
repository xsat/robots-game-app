import React from "react";
import Messages from "../messages";

class Register extends React.Component {
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
                        <Messages className="error"
                                  messages={['asdasdasd', 2, 3]}/>
                    </li>
                    <li>
                        <label>Password</label>:
                        <input name="password" type="password"
                               value={this.state.password}
                               onChange={this.handleChange}/>
                        <Messages className="error" messages={[1, 2, 3]}/>
                    </li>
                    <li>
                        <input type="submit" value="Register"/>
                    </li>
                </ul>
            </form>
        );
    }
}

export default Register;
