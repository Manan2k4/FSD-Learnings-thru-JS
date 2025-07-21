// function Demo1() {
//     return <h1>Welcome!!!</h1>
// }

const Demo1 = (props) => {
    console.log(props)
    return(
        <div>
            <h1>Welcome - {props.dept}, {props.institute}</h1>
            {props.children}
        </div>
    )
}

// another method
// function Demo1(props) {
// return <h1>Welcome - {props.dept}, {props.institute}</h1>
// }

export default Demo1