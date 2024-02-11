import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from './Slice';

const Api = () => {
    const dispatch = useDispatch();
    const [store, setStore] = useState([]);

    useEffect(() => {
        ApiData();
    }, []);

    const ApiData = async () => {
        const data = await fetch("https://fakestoreapi.com/products")
        const response = await data.json();
        setStore(response)
    };

    const handleSend = (item) => {
        dispatch(add(item))
    };

    return (
        <div>
            <div className=''>
                {
                    store.map((item) => (
                        <div className='py-5' key={item.id}>
                            <h2>{item.title}</h2>
                            <img className='h-20' src={item.image} alt={item.title} />
                            <p>{item.description}</p>
                            <button className='py-2 px-4 bg-red-500 text-white' onClick={() => handleSend(item)} >Add to Cart</button>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Api;