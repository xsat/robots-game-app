import React from "react";
import {Link, Redirect} from "react-router-dom";
import {Cookies} from "react-cookie";

class Matchmaking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dots: 3,
            game: null
        };
        this.interval = 0
    }

    componentDidMount() {
        this.interval = setInterval(async () => {
            let dots = this.state.dots;

            if (++dots > 3) {
                dots = 0;
            }

            const token = (new Cookies()).get('token');
            const response = await fetch('http://robots-game-api.local/v1/player/game', {
                method: 'POST',
                mode: 'cors',
                headers: {Authorization: 'Bearer ' + token}
            });
            const json = await response.json();

            this.setState({
                dots: dots,
                game: json
            })
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);

        console.log(this.props.dataUnsaved);
        // if (!this.isActive()) {
        //     const token = (new Cookies()).get('token');
        //     fetch('http://robots-game-api.local/v1/player/game', {
        //         method: 'DELETE',
        //         mode: 'cors',
        //         headers: {Authorization: 'Bearer ' + token}
        //     });
        // }
    }

    render() {
        if (this.isActive()) {
            return <Redirect to='/game'/>
        }

        const dots = ''.padStart(this.state.dots, '.');

        return (
            <React.Fragment>
                <Link to="/">Lobby</Link>
                <h1>
                    Matchmaking an opponent{dots}
                </h1>
            </React.Fragment>
        );
    }

    isActive() {
        const game = this.state.game ?? null;

        return game && (game.isStarted ?? false);
    }
}

export default Matchmaking;
