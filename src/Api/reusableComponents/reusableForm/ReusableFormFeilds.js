import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Grid } from '@mui/material';

const FormField = ({ control, name, label, rules, type = 'text' }) => (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
            <TextField
                {...field}
                fullWidth
                label={label}
                type={type}
                error={!!error}
                helperText={error ? error.message : null}
            />
        )}
    />
);

const ReusableForm = ({ defaultValues, fields, onSubmit }) => {
    const { control, handleSubmit, reset } = useForm({
        defaultValues,
    });

    const handleFormSubmit = (data) => {
        onSubmit(data);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Grid container spacing={2}>
                {fields.map((field) => (
                    <Grid item xs={12} key={field.name}>
                        <FormField control={control} {...field} />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ReusableForm;
