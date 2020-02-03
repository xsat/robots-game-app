import React from "react";
import Img from "react-image";
import {Link} from "react-router-dom";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.interval = 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {}, 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
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
