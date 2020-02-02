import React from "react";
import Img from "react-image";
import {Link} from "react-router-dom";

class Game extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/">Lobby</Link>
                <div>
                    <Img className="player" src="/models/model2.png"/>
                    <Img className="player" src="/models/model1.png"/>
                </div>
            </React.Fragment>
        );
    }
}

export default Game;
