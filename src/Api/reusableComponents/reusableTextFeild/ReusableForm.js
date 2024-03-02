import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Typography } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const AdvancedMUIForm = ({ fields, onSubmit }) => {
  const validationSchema = yup.object().shape({
    ...Object.fromEntries(
      fields.map((field) => [field.name, field.validation])
    ),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <Controller
            name={field.name}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label={field.name}
                variant="outlined"
                fullWidth
                error={!!errors[field.name]}
                helperText={errors[field.name]?.message}
              />
            )}
          />
        </div>
      ))}
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AdvancedMUIForm;
