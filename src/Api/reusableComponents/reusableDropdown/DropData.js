import React from 'react';
import { useForm, Controller, FormProvider } from 'react-hook-form';
import ReactSelector from './DropDownReuse';

const FormWithReactSelector = () => {
    const methods = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="fruit">Fruit:</label>
                    <Controller
                        name="fruit"
                        control={methods.control}
                        defaultValue=""
                        rules={{ required: 'Please select a fruit' }}
                        render={({ field }) => (
                            <ReactSelector
                                label="Select Fruit"
                                options={[
                                    { value: 'apple', label: 'Apple' },
                                    { value: 'banana', label: 'Banana' },
                                    { value: 'orange', label: 'Orange' },
                                ]}
                                onChange={(selectedOption) => field.onChange(selectedOption.value)}
                                menuPlacement="auto"
                                width="200px"
                                control={methods.control}
                                name="fruit"
                            />
                        )}
                    />
                    {methods.errors.fruit && <span>{methods.errors.fruit.message}</span>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </FormProvider>
    );
};

export default FormWithReactSelector;
