import React from "react";
import {Common, Player, Progress, Round} from "../components";
import {Link} from "react-router-dom";
import {GAME_KEY} from "../constants";

export class Battle extends Common {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            game: null,
        };
    }

    fight() {
        const gameId = this.cookies.get(GAME_KEY);

        this.gameApi.privateRequest(
            `/v1/player/game/${gameId}`,
            {method: "PUT"}
        ).then((response) => {
            if (response.gameId ?? false) {
                this.setState({
                    isLoaded: true,
                    game: response
                });
            } else {
                this.cookies.remove(GAME_KEY);
                this.props.history.push("/matchmaking");
            }
        }).catch(() => {
            this.setState({isLoaded: false});
        });
    }

    render() {
        const game = this.state.game ?? {};
        const players = game.players ?? [];
        const rounds = (game.rounds ?? []).reverse();

        let colors = {};

        for (const player of players) {
            colors[player.playerId] = player.color;
        }

        return (
            <React.Fragment>
                <div className="breadcrumbs">
                    <Link to="/logout">Logout</Link> | <Link
                    to="/">Lobby</Link> > <h1>Battle</h1>

                    <Progress
                        message="Fighting"
                        handler={() => {
                            this.fight();
                        }}/>

                    <table>
                        <tbody>
                        <tr key="players">
                            {players.map((player) => {
                                return <Player player={player}/>
                            })}
                        </tr>
                        {rounds.map((round) => {
                            return <Round round={round} colors={colors}/>
                        })}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}