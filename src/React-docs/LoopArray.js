import React, { useState } from 'react';

function LoopArray() {
    const [inputValues, setInputValues] = useState('');
    const [result, setResult] = useState([]);

    const handleChange = (event) => {
        setInputValues(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let parent = inputValues.split(',').map(Number);
        let sum = 0;
        let newResult = [];
        for (let i = 0; i < parent.length; i++) {
            if (parent[i] % 2 === 0) {
                sum += parent[i];
                newResult.push(parent[i]);
            } else {
                newResult.push(sum + parent[i]);
                sum = 0;
            }
        }
        if (sum > 0) {
            newResult.push(sum);
        }
        setResult(newResult);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-4 bg-gray-100 rounded-lg shadow-xl border">
                <h2 className="text-2xl font-semibold mb-4">Calculator</h2>
                <form onSubmit={handleSubmit} className="">
                    <label className="block mb-2">
                        Enter numbers (separated by commas):
                        <input type="text" className="block border rounded-md p-2 mt-1 w-full"
                         value={inputValues} onChange={handleChange}/>
                    </label>
                    <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600">
                        Calculate
                    </button>
                </form>
                <div className="mt-4">
                    <div>
                        Numbers: {result.map((item, index) => (
                            <span key={index}>{item}, </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoopArray;