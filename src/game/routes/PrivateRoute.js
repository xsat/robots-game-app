import React from "react";
import {Redirect, Route} from 'react-router-dom';

export class PrivateRoute extends Route {
    render() {
        const isAuthorized = this.props.isAuthorized ?? false;

        if (isAuthorized !== true) {
            return <Redirect to="/login"/>;
        }

        return super.render();
    }
}