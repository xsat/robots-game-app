import React from "react";
import {Redirect, Route} from 'react-router-dom';

export class PublicRoute extends Route {
    render() {
        const isAuthorized = this.props.isAuthorized ?? false;

        if (isAuthorized === true) {
            return <Redirect to="/"/>;
        }

        return super.render();
    }
}