import React, { useEffect, useRef } from 'react';

function UseRef() {
    const inputRef1 = useRef('');
    const inputRef2 = useRef('');
    const inputRef3 = useRef('');

    useEffect(() => {
        inputRef1.current.focus();
    }, []);

    const handleEnter = (e) => {
        e.preventDefault();
        if (e.key === "Enter") {
            inputRef2.current.focus();
        }
    }
                                            
    return (
        <div>
            <div className='border py-4 text-center space-x-5'>
                <label>1</label>
                <input className='border' type='text' ref={inputRef1} placeholder='Enter' onKeyDown={handleEnter} />
                <label>2</label>
                <input className='border' type='text' ref={inputRef2} placeholder='Enter' onKeyDown={handleEnter} />
                <label>3</label>
                <input className='border' type='text' ref={inputRef3} placeholder='Enter' onKeyDown={handleEnter} />
            </div>
        </div>
    );
}

export default UseRef;
