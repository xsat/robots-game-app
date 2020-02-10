import React from "react";
import Img from "react-image";

export class Player extends React.Component {
    image(color, position) {
        if (color === "blue") {
            if (position === "left") {
                return "../images/blue_robot_left.png";
            } else if (position === "right") {
                return "../images/blue_robot_right.png";
            }
        } else if (color === "red") {
            if (position === "left") {
                return "../images/red_robot_left.png";
            } else if (position === "right") {
                return "../images/red_robot_right.png";
            }
        }

        return null;
    }

    percent(condition, health) {
        if (condition < 0) {
            condition = -condition;
        }

        return Math.round((condition / health) * 100);
    }

    render() {
        const player = this.props.player ?? {};
        const position = player.position ?? null;
        const color = player.color ?? null;
        const health = player.health ?? 0;
        const condition = player.condition ?? 0;
        const percent = this.percent(condition, health);

        return (
            <td className={position} key={`player_${position}`}>
                <div className="player">
                    <Img src={this.image(color, position)}/>
                    <div>{player.playerId ?? null}</div>
                    <div
                        className={condition < 0 ?
                            "damage overloaded" :
                            "damage"}>
                        <div
                            style={{width: `${percent}%`}}
                            className={`health ${color}`}>
                            {condition}
                        </div>
                    </div>
                </div>
            </td>
        );
    }
}