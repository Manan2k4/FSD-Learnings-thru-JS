// function Demo1(){
//     return <h1> welcome</h1>
// }
// export default Demo1

// export const Demo1=()=><h1>welcome!! </h1>

export const Demo1=(props)=>{
    return <div >
        <h1>welcome-{props.dept},{props.institute}</h1>
        {props.children}
    </div>
}