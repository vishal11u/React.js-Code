import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-around items-center bg-gray-600 py-8'>
            <Link to='/' className='text-center text-4xl font-semibold'>
                <h1>Home⚠️</h1>
            </Link>
            <Link to='/shop'>
                <Icon />
            </Link>
        </div>
    )
}

export default Navbar;