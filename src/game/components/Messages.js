import React from "react";

export class Messages extends React.Component {
    static convert(items) {
        const messages = items ?? [];
        let errors = {};

        messages.map(function (message) {
            if (errors[message.field] === undefined) {
                errors[message.field] = [];
            }

            errors[message.field].push(message.message);

            return message;
        });

        return errors;
    }

    render() {
        const items = this.props.items ? this.props.items : [];
        const className = this.props.className;

        return items.map(
            (message, index) => {
                return (
                    <p className={className} key={index}>
                        {message}
                    </p>
                );
            }
        );
    }
}