import React from "react";
import {Link} from "react-router-dom";

class Matchmaking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {dots: 0};
        this.interval = 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let dots = this.state.dots;

            if (++dots > 3) {
                dots = 0;
            }

            this.setState({
                dots: dots
            })
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const dots = ''.padStart(this.state.dots, '.');

        return (
            <React.Fragment>
                <Link to="/">Lobby</Link>
                <h1>
                    Matchmaking an opponent{dots}
                </h1>
            </React.Fragment>
        );
    }
}

export default Matchmaking;
