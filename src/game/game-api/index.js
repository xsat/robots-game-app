import {Cookies} from "react-cookie";
import {GAME_API_URL, TOKEN_KEY} from "../constants";

export class GameApi {
    constructor(props) {
        this.cookies = props.cookies ?? new Cookies();
    }

    privateRequest(path, data = {}) {
        const token = this.cookies.get(TOKEN_KEY);
        return this.publicRequest(
            path,
            Object.assign( {
                headers: {Authorization: "Bearer " + token}
            }, data)
        );
    }

    publicRequest(path, data = {}) {
        return this.request(
            GAME_API_URL + path,
            Object.assign( {
                method: "GET",
                mode: "cors"
            }, data)
        );
    }

    async request(url, data = {}) {
        const response = await fetch(url, data);
        return await response.json();
    };
}