import React, { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    incr = () => {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    };

    incr_5 = () => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.incr();
            }, 0);
        }
    };

    decr = () => {
        this.setState(prevState => ({
            count: prevState.count - 1
        }));
    };

    decr_5 = () => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                this.decr();
            }, 0);
        }
    };

    render() {
        return (
            <div class="container">
                <button onClick={this.incr}>Increment</button>
                <button onClick={this.incr_5}>Incr_by_5</button>
                <button onClick={this.decr}>Decrement</button>
                <button onClick={this.decr_5}>decr_5</button>
                <p>Count is: {this.state.count}</p>
            </div>
        );
    }
}

export default Counter;
