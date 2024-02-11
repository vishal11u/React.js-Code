import React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useSelector } from 'react-redux';

const Icon = () => {
    const total = useSelector(state => state.cart);
    return (
        <div>
            <Badge badgeContent={total.length} color="primary">
                <ShoppingBasketIcon color="action" />
            </Badge>
        </div>
    )
}

export default Icon;