import React, { Component } from 'react';
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: new Date(),
            status: 'on'
        };
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}. {this.state.status}</h2>
            </div>
        );
    }
}

export default Clock;
