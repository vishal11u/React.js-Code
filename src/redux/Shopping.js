import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './Slice';

const Shopping = () => {
    const Product = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleremove = (item) => {
        dispatch(remove(item))
    }

    return (
        <div>
            <h1 className='text-center text-4xl font-semibold py-8 bg-yellow-100'>Your shopping cart:</h1>
            {
                Product.map((list) => (
                    <div className='flex justify-around items-center py-4 border' key={list.id}>
                        <p>{list.id}</p>
                        <img className='h-20' src={list.image} alt={list.title} />
                        <p>{list.title}</p>
                        <p>{list.price}</p>
                        <button type='button' onClick={() => handleremove(list.id)}>❌</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Shopping;