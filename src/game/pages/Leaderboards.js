import React from "react";
import {Common, Pagination} from "../components";
import {Link} from "react-router-dom";

export class Leaderboards extends Common {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            list: {
                limit: 10,
                offset: 0,
                total: 50,
                items: []
            }
        };
    }

    componentDidMount() {
        if (!this.state.isLoaded) {
            this.gameApi
                .privateRequest(`/v1/leaderboards`)
                .then((response) => {
                    if (
                        response.limit !== undefined
                        && response.offset !== undefined
                        && response.total !== undefined
                        && response.items !== undefined
                    ) {
                        this.setState({
                            isLoaded: true,
                            list: response
                        })
                    }
                });
        }
    }

    render() {
        const page = parseInt(this.props.match.params.page ?? 0);
        const items = (this.state.list.items ?? []).reverse();
        const total = this.state.list.total ?? 0;

        return (
            <React.Fragment>
                <div className="breadcrumbs">
                    <Link to="/logout">Logout</Link> | <Link
                    to="/">Lobby</Link> > <h1>Leaderboards</h1>
                </div>
                <table>
                    <tbody>
                    {items.map((item, index) => {
                        return (
                            <tr key={`row${index}`}>
                                <td key={`key${index}`}>
                                    {item.playerId ?? null}
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <Pagination url="/leaderboards"
                            total={total} page={page}/>
            </React.Fragment>
        );
    }
}