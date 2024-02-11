import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hello from './Hello';
import Hello2 from './Hello2';

function RouterDom() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Hello />}/>
                <Route path='/page' element={<Hello2 />} />
            </Routes>
        </div>
    )
}

export default RouterDom