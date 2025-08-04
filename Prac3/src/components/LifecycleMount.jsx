import { Component } from "react";
// import LifecycleMount1 from "./LifecycleMount1";

class LifecycleMount extends Component {
    constructor() {
        super()
        this.setState = {
            dept : "CSE"
        }
        console.log("A - Constructor");
    }
    componentDidMount() {
        console.log("A - componentDidMount");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("A - getDerivedStateFromProps")
        return null
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("A - shouldComponentUpdate")
        return true
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("A -     componentDidUpdate")
    }
    change() {
        
    }
    render() {
        console.log("A - render")
        return(
            <div>
                <h1>LifeCycle Methods</h1>
                <LifecycleMount1/>
            </div>
        )    
    }
}
export default LifecycleMount