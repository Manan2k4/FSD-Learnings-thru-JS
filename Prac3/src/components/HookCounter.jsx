import React, {useState} from "react";

const HookCounter = () =>  {
    const [count, setCount] = useState()

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