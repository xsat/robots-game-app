import React from "react";
import {Common, Pagination} from "../components";
import {Link} from "react-router-dom";

export class Leaderboards extends Common {
    render() {
        const page = parseInt(this.props.match.params.page ?? 0);

        return (
            <React.Fragment>
                <div className="breadcrumbs">
                    <Link to="/logout">Logout</Link> | <Link
                    to="/">Lobby</Link> > <h1>Leaderboards</h1>
                </div>
                <Pagination url="/leaderboards" total={100} page={page}/>
            </React.Fragment>
        );
    }
}