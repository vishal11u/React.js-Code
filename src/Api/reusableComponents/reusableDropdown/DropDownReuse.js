import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Controller } from 'react-hook-form';

const ReactSelector = ({ label, options, onChange, menuPlacement, width, error, control, name, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!rest.defaultValue);

    useEffect(() => {
        setHasValue(!!rest.defaultValue);
    }, [rest.defaultValue]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (selectedOption) => {
        if (onChange) {
            onChange(selectedOption);
        }
        setHasValue(!!selectedOption);
    };

    return (
        <div className="relative mb-4">
            <Controller
                name={name}
                control={control}
                defaultValue={rest.defaultValue}
                rules={rest.rules}
                render={({ field }) => (
                    <div>
                        <label
                            className={`absolute top-[9px] text-sm left-3 transition-all ${isFocused || hasValue ? '-translate-y-full text-[11px] text-blue-500 top-3' : ''} bg-white px-1 z-10`}
                            style={{ transform: isFocused || hasValue ? 'translateY(-100%)' : 'none' }}
                        >
                            {label}
                        </label>
                        <Select
                            {...field}
                            error={error}
                            options={options}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={field.value}
                            menuPlacement={menuPlacement}
                            styles={{
                                container: (provided) => ({
                                    ...provided,
                                    zIndex: 1,
                                }),
                                placeholder: (baseStyles, state) => ({
                                    ...baseStyles,
                                    display: state.isFocused ? "none" : "none",
                                }),
                                control: (baseStyles) => ({
                                    ...baseStyles,
                                    width: width,
                                }),
                                indicatorSeparator: () => null
                            }}
                        />
                    </div>
                )}
            />
        </div>
    );
};

export default ReactSelector;
