import React, { useState } from 'react';
import dropData from './DropData';

function Dropdowns() {
    const [country, setCountry] = useState('--Country--');
    const [state, setState] = useState('--State--');
    const [city, setCity] = useState('--City--');
    const [selectedData, setSelectedData] = useState([]);

    const handleCountry = (e) => {
        const selectedCountry = e.target.value;
        setCountry(selectedCountry);
        setState('--State--');
        setCity('--City--');
    }

    const handleState = (e) => {
        const selectedState = e.target.value;
        setState(selectedState);
        setCity('--City--');
    }

    const handleCity = (e) => {
        const selectedCity = e.target.value;
        setCity(selectedCity);
    }

    const handleAdd = () => {
        setSelectedData([...selectedData, { country, state, city }]);
        setCountry('--Country--');
        setState('--State--');
        setCity('--City--');
    }

    return (
        <div>
            <div className='flex items-center justify-center space-x-10 mt-8'>
                <div className=''>
                    <h1>Select Country:-</h1>
                    <select className='border cursor-pointer px-5 rounded' value={country} onChange={handleCountry}>
                        <option>--Country--</option>
                        {dropData.map((ctr, index) => (
                            <option key={index} value={ctr.name}>{ctr.name}</option>
                        ))}
                    </select>
                </div>
                {/* --------------- */}
                <div className=''>
                    <h1>Select State:-</h1>
                    <select className='border cursor-pointer px-5 rounded' value={state} onChange={handleState}>
                        <option>--State--</option>
                        {country !== '--Country--' && dropData.find(ctr => ctr.name === country)?.states.map((st, index) => (
                            <option key={index} value={st.name}>{st.name}</option>
                        ))}
                    </select>
                </div>
                {/* --------------- */}
                <div className=''>
                    <h1>Select City:-</h1>
                    <select className='border cursor-pointer px-5 rounded' value={city} onChange={handleCity}>
                        <option>--City--</option>
                        {state !== '--State--' && dropData.find(ctr => ctr.name === country)?.states.find(st => st.name === state)?.city.map((ct, index) => (
                            <option key={index} value={ct}>{ct}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAdd}>
                        Add
                    </button>
                </div>
            </div>
            {selectedData.length > 0 ? (
                <table className="table-fixed w-1/3 text-center mx-auto mt-8">
                    <thead>
                        <tr>
                            <th className="border px-4 py-2">Country</th>
                            <th className="border px-4 py-2">State</th>
                            <th className="border px-4 py-2">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedData.map((data, index) => (
                            <tr key={index}>
                                <td className="border px-4 py-2">{data.country}</td>
                                <td className="border px-4 py-2">{data.state}</td>
                                <td className="border px-4 py-2">{data.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (null)}
        </div>
    )
}

export default Dropdowns;
