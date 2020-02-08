import React from "react";
import {Cookies} from "react-cookie";
import {Redirect} from "react-router-dom";

class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.cookies = props.cookies ?? new Cookies();
    }

    render() {
        this.cookies.remove('token');

        return <Redirect to='/login'/>
    }
}

export default Logout;
