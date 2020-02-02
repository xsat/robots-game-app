import React from "react";
import {Cookies} from "react-cookie";
import {Redirect} from "react-router-dom";

class Logout extends React.Component {
    render() {
        (new Cookies()).remove('token');

        return <Redirect to='/login'/>
    }
}

export default Logout;
