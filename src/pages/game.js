import React from "react";
import Img from "react-image";
import {Link} from "react-router-dom";
import {Cookies} from "react-cookie";

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
        clearInterval(this.interval);
    }

    render() {
        const game = this.state.game ?? null;

        console.log(game);

        return (
            <React.Fragment>
                <Link to="/">Lobby</Link>
                <div>
                    <Img className="player" src="/images/blue_robot_left.png"/>
                    <Img className="player" src="/images/red_robot_right.png"/>
                </div>
            </React.Fragment>
        );
    }
}

export default Game;
