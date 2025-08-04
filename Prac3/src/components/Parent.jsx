import { Component } from "react";
import LifecycleMount from "./LifecycleMount";
class Parent extends Component {
    constructor() {
        super()
        this.state = {
            t: true
        }
    }
    changeToggle() {
        this.setState({
            t: !this.state.t
        })
    }
    render() {
        return (
            <div>
            <button onclick="{() => this.changeToggle()}">Toggle button</button>
            {this.state.t && <LifecycleMount/>}
            </div>
        )
    }
}
export default Parent