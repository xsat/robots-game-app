import {Cookies} from "react-cookie";
import {API_URL, TOKEN_KEY} from "../constants";

export class Api {
    constructor(props) {
        this.cookies = props.cookies ?? new Cookies();
    }

    privateRequest(path, data = {}) {
        const token = this.cookies.get(TOKEN_KEY);
        return this.publicRequest(
            path,
            Object.assign(data, {
                headers: {Authorization: 'Bearer ' + token}
            })
        );
    }

    publicRequest(path, data = {}) {
        return this.request(
            API_URL + path,
            Object.assign(data, {
                method: 'GET',
                mode: 'cors'
            })
        );
    }

    async request(url, data = {}) {
        const response = await fetch(url, data);
        return await response.json();
    };
}