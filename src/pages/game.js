import React from "react";
import Img from "react-image";
import {Link} from "react-router-dom";
import {Cookies} from "react-cookie";

function Players(props) {
    const players = props.players;

    return (
        <ul>
            {players.map(function (player, index) {
                return <li key={index}>
                    Username: {player.playerId}<br/>
                    Health: {player.health}
                </li>
            })}
        </ul>
    );
}

function Rounds(props) {
    const rounds = props.rounds.reverse();

    return rounds.map(function (round, index) {
        const actions = round.actions.reverse();
        let actionIndex = 0;

        return (
            <React.Fragment>
                <p>Round</p>

                <ul key={index}>
                    {
                        actions.map(function (action) {
                            return (
                                <li key={actionIndex++} className="active">
                                    <b>{action.playerId}</b> lunch a rocket
                                    into <b>{action.targetId}</b> with
                                    the <b>{action.speed}</b> speed and
                                    deal <b>{action.damage}</b> damage
                                </li>
                            );
                        })
                    }
                </ul>
            </React.Fragment>
        );
    });
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            game: null
        };
        this.interval = 0
    }

    componentDidMount() {
        this.interval = setInterval(async () => {
            const token = (new Cookies()).get('token');
            const response = await fetch('http://robots-game-api.local/v1/player/game', {
                method: 'POST',
                mode: 'cors',
                headers: {Authorization: 'Bearer ' + token}
            });
            const json = await response.json();

            this.setState({game: json});
        }, 500);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const game = this.state.game ?? null;

        return (
            <React.Fragment>
                <Link to="/">Lobby</Link>
                <div>
                    <Img className="player" src="/images/blue_robot_left.png"/>
                    <Img className="player" src="/images/red_robot_right.png"/>
                </div>
                {game ? <Players players={game.players}/> : null}
                <div className="history">
                    {game ? <Rounds rounds={game.rounds}/> : null}
                </div>
            </React.Fragment>
        );
    }
}

export default Game;
