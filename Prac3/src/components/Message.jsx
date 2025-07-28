import { Component } from "react";
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: "CHARUSAT!!!"
        }
    }
    changeMessage() {
        this.setState({
            message: "CSPIT-CSE!!"
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome to - {this.state.message}</h1>
                <button onclick={() => this.changeMessage()}>Click</button>
            </div>
        )
    }
}