import React from "react";
import {Link} from "react-router-dom";
const apiUrl = 'http://robots-game-api.local';

class Leaderboards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            limit: 5,
            offset: 0,
            total: 0,
            items: []
        };

        this.skipUpdate = true;
    }

    async componentDidMount() {
        const page = parseInt(this.props.match.params.page ?? '1');
        const limit = this.state.limit;
        const offset = this.state.limit * page;
        const response = await fetch(apiUrl + '/v1/leaderboards?offset=' + offset + '&limit=' + limit, {
            method: 'GET',
            mode: 'cors',
        });
        const json = await response.json();

        if (
            json.limit !== undefined
            && json.offset !== undefined
            && json.total !== undefined
            && json.items !== undefined
        ) {
            this.setState(json);
        }

        this.skipUpdate = true;
    }

    async componentDidUpdate() {
        if (this.skipUpdate) {
            this.skipUpdate = false;
        } else {
            await this.componentDidMount();
        }
    }

    render() {
        const items = this.state.items.map(function (item, index) {
            return <li key={index}>{item.playerId}:{item.username}</li>
        });

        const total = this.state.total;
        const limit = this.state.limit;
        const count = Math.floor(total / limit);
        const pages = [...Array(count).keys()].map(function (number) {
            const page = number + 1;
            let url = '/leaderboards';
            if (number !== 0) {
                url += '/' + number;
            }

            return (
                <li className="inline" key={page}>
                    <Link to={url} key={page}>{page}</Link>
                </li>
            );
        });

        return (
            <React.Fragment>
                <Link to="/">Lobby</Link>
                <h1>Leaderboards</h1>
                <hr/>
                <ul>
                    {items}
                </ul>
                <hr/>
                <ul>
                    {pages}
                </ul>
            </React.Fragment>
        );
    }
}

export default Leaderboards;
