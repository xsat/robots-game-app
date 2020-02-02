import React from 'react';

export default function Messages(props) {
    const messages = props.messages ? props.messages : [];
    const className = props.className;

    return messages.map(
        function (message, index) {
            return (
                <p className={className} key={index}>
                    {message}
                </p>
            );
        }
    );
}
