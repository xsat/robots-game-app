import React from "react";
import {Action} from "./Action";

export class Round extends React.Component {
    render() {
        const round = this.props.round;
        const actions = (round.actions ?? []).reverse();
        const colors = this.props.colors ?? {};

        return (
            <tr>
                <td colSpan="2">
                    <p>
                        Round 3
                    </p>
                    <ul>
                        {actions.map((action, index) => {
                            return (
                                <li key={index}>
                                    <Action action={action} colors={colors}/>
                                </li>
                            );
                        })}
                    </ul>
                </td>
            </tr>
        );
    }
}