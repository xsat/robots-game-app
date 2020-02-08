import React, {useCallback} from "react";

export class Progress extends React.Component {
    constructor(props) {
        super(props);

        this.handler = props.handler ?? (() => {
        });
        this.maxDots = props.maxDots ?? 3;
        this.timeout = props.timeout ?? 500;
        this.message = props.message ?? 'Loading';
        this.interval = 0;

        this.state = {dots: 0};
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            let dots = this.state.dots;

            if (++dots > this.maxDots) {
                dots = 0;
            }

            this.handler();
            this.setState({dots: dots})
        }, this.timeout);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const message = this.message;
        const length = message.length + this.state.dots;

        return (<p>{message.padEnd(length, '.')}</p>);
    }
}
