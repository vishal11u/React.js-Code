import React, { useState } from 'react'

const FunctionLifeCycle = () => {
    const [number, setNumber] = useState(0)

    const increase = () => {
        setNumber(number + 1)
    }

    return (
        <div>
            <p>{number}</p>
            <button onClick={increase}>+</button>
        </div>
    )
}

export default FunctionLifeCycle