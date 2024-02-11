import React, { createContext, useContext } from 'react'

const MyContext = createContext()

function PracticeContex() {
    const [number, setNumber] = React.useState(0)

    const increment = () => {
        setNumber(number + 2)
    }

    return (

        <MyContext.Provider value={{ number, setNumber }}>
            <div>
                <h1>Parent Context Api</h1>
                <p>Message : {number}</p>
                <button type='button' onClick={increment}> + 2</button>
                <ContextOne />
                <ContextTwo />
                <ContextThree />
            </div>
        </MyContext.Provider>

    )
}

function ContextOne() {
    const [number, setNumber] = useContext(MyContext)

    const increment = () => {
        setNumber(number - 2)
    }

    return (
        <div>
            <h1>Child 1 Context Api</h1>
            <p>Message : {number}</p>
            <button type='button' onClick={increment}> - 2</button>
        </div>
    )

}

function ContextTwo() {
    const [number, setNumber] = useContext(MyContext)

    const increment = () => {
        setNumber(number * 2)
    }

    return (
        <div>
            <h1>Child 2 Context Api</h1>
            <p>Message : {number}</p>
            <button type='button' onClick={increment}> * 2</button>
        </div>
    )
}

function ContextThree() {
    const [number, setNumber] = useContext(MyContext)

    const increment = () => {
        setNumber(number * 2)
    }

    return (
        <div>
            <h1>Child 3 Context Api</h1>
            <p>Message : {number}</p>
            <button type='button' onClick={increment}> / 2</button>
        </div>
    )
}

export default PracticeContex