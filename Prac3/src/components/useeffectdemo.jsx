import { useState, useEffect } from "react";
function UseEffectDemo() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    useEffect(() => {
        console.log("updating using useEffect");
        document.title = `Count: ${count}`;
    }, []);
    return (
        
    )
}