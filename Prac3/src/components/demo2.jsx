import { Component } from "react";

class Demo2 extends Component {
    render(){
        const {dept, institute} = this.props
        return(
            <div>
                <h1>Welcome to Charusat - {dept}, {institute}</h1>
            </div>
        )
    }
}

export default Demo2