import React from "react";

export class Action extends React.Component {
    render() {
        const action = this.props.action;
        const type = action.type ?? null;
        const colors = this.props.colors ?? {};

        if (type === 'attack') {
            return (
                <React.Fragment>
                    <b className={colors[action.playerId]}>{action.playerId ?? null}</b> lunch a rocket
                    into <b className={colors[action.targetId]}>{action.targetId ?? null}</b> with
                    the <b className={colors[action.playerId]}>{action.speed ?? null}</b> speed and
                    deal <b className={colors[action.playerId]}>{action.damage ?? null}</b> damage
                </React.Fragment>
            );
        } else if (type === 'miss') {
            return (
                <React.Fragment>
                    <b className={colors[action.playerId]}>{action.playerId ?? null}</b> lunch a rocket
                    into <b className={colors[action.targetId]}>{action.targetId ?? null}</b> with
                    the <b className={colors[action.playerId]}>{action.speed ?? null}</b> speed and miss
                </React.Fragment>
            );
        } else if (type === 'won') {
            return <React.Fragment>
                <b className={colors[action.playerId]}>{action.playerId ?? null}</b> won a game
            </React.Fragment>
        } else if (type === 'draw') {
            return (
                <b className="yellow">Draw</b>
            );
        }

        return 'Undefined';
    }
}