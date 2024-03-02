import React from 'react';
import ReusableButton from './ReusableButton';

const MyComponent = () => {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div>
            <ReusableButton onClick={handleClick}>
                Primary Button
            </ReusableButton>
            <ReusableButton variant="outline" onClick={handleClick}>
                Outline Button
            </ReusableButton>
            <ReusableButton variant="text" color="secondary" onClick={handleClick}>
                Text Button
            </ReusableButton>
            <ReusableButton disabled>
                Disabled Button
            </ReusableButton>
        </div>
    );
};

export default MyComponent;
