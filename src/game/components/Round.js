import React from "react";
import {Action} from "./Action";

export class Round extends React.Component {
    render() {
        const round = this.props.round;
        const number = round.number ?? 0;
        const actions = (round.actions ?? []).reverse();
        const colors = this.props.colors ?? {};

        return (
            <tr key={`round_${number}`}>
                <td colSpan="2">
                    <p>
                        Round {number + 1}
                    </p>
                    <ul>
                        {actions.map((action, index) => {
                            return (
                                <li key={`round_${number}_action_${index}`}>
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