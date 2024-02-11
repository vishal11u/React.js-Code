import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCRETMENT":
            return { count: state.count === 10 ? state.count = 1
                 : state.count + 1 };
        case "DECREMENT":
            return { count: state.count === 0 ? state.count - 0 : state.count - 1 }
        default:
            return state;
    }
}

function RefIncre() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div className='text-center'>
            <p>Count:{state.count}</p>
            <button className='border mx-4' onClick={() => dispatch({ type: "INCRETMENT" })} type='button'>Inc</button>
            <button className='border mx-4' onClick={() => dispatch({ type: "DECREMENT" })} type='button'>Dec</button>
        </div>
    )
}

export default RefIncre;