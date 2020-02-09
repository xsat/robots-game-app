import React from "react";
import {Cookies} from "react-cookie";
import {GameApi} from "../game-api";

export class Common extends React.Component {
    constructor(props) {
        super(props);
        this.cookies = props.cookies ?? new Cookies();
        this.gameApi = props.gameApi ?? new GameApi({cookies: this.cookies});
    }
}