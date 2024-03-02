import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme, variant }) => ({
    margin: theme.spacing(1),
    ...(variant === 'outline' && {
        borderColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    }),
    ...(variant === 'text' && {
        backgroundColor: 'transparent',
        color: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    }),
}));

const ReusableButton = ({ children, onClick, disabled, variant = 'contained', color = 'primary', ...otherProps }) => {
    return (
        <StyledButton
            variant={variant}
            color={color}
            onClick={onClick}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </StyledButton>
    );
};

export default ReusableButton;
