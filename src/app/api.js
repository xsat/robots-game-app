import {Cookies} from "react-cookie";

class Api {
    constructor(props) {
        this.url = 'http://robots-game-api.local';
        this.cookies = props.cookies ?? new Cookies();
    }

    privateRequest(path, data = {}) {
        const token = this.cookies.get('token');
        return this.publicRequest(
            path,
            Object.assign(data, {
                headers: {Authorization: 'Bearer ' + token}
            })
        );
    }

    publicRequest(path, data = {}) {
        return this.request(
            this.url + path,
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

export default Api;
