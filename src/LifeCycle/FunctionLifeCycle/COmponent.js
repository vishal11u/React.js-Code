import React, { useEffect } from 'react'

const COmponent = () => {
    let value = 11;

    useEffect(() => {
        console.log("Component mounted");
    }); //it is qualy to compnentDidMount but when we change state then it goes in infinite loop.

    useEffect(() => {
        // This code will run when the component mounts
        console.log('Component mounted');

        // If you have any cleanup code, you can return a function from useEffect
        return () => {
            console.log('Component will unmount');
            // Cleanup code goes here
        };
    }, []); // The empty dependency array means this effect will only run once, similar to componentDidMount

    useEffect(() => {
        // This code will run when the component mounts and whenever the value changes
        console.log('Component mounted');

        // If you have any cleanup code, you can return a function from useEffect
        return () => {
            console.log('Component will unmount');
            // Cleanup code goes here
        };
    }, [value]); // The effect will run when `value` changes
    return (
        <div>Component</div>
    )
}

export default COmponent;
 