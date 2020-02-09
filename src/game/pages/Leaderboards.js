import React from "react";
import {Common, Pagination} from "../components";

export class Leaderboards extends Common {
    render() {
        const page = parseInt(this.props.match.params.page ?? 0);

        return (
            <React.Fragment>
                <h1>Leaderboards</h1>
                <Pagination url="/leaderboards" total={100} page={page}/>
            </React.Fragment>
        );
    }
}