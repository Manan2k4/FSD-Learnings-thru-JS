import React, {useState} from "react";

function HookCounter2() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
        </div>
    )
}