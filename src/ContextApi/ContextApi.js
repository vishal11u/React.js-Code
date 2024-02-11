import React, { createContext, useContext } from "react";

const MyContext = createContext()

function ContextApi() {
    const [number, setNumber] = React.useState(0)

    const increment = () => {
        setNumber(number + 1)
    }

    return (
        <MyContext.Provider value={{ number, setNumber }}>
            <div>
                <h1>Context API</h1>
                <p>Number : {number} </p>
                <button type="button" onClick={increment}>Add + 1</button>
                <ContextOne />
                <ContextTwo />
            </div>
        </MyContext.Provider>
    )
}

function ContextOne() {
    const { number, setNumber } = useContext(MyContext)

    const increment = () => {
        setNumber(number - 1)
    }


    return (
        <div>
            <h2>Context One.</h2>
            <p>Number : {number}</p>
            <button type="button" onClick={increment}>Less - 1</button>
        </div>
    )
}

function ContextTwo() {
    const { number, setNumber } = useContext(MyContext)

    const increment = () => {
        setNumber(number + 10)
    }


    return (
        <div>
            <h2>Context Two.</h2>
            <p>Number : {number}</p>
            <button type="button" onClick={increment}>Add</button>
        </div>
    )
}

export default ContextApi;


