import React from 'react';
import AdvancedMUIForm from './ReusableForm';

const MyForm = () => {
  const onSubmit = (data) => {
    console.log('Form data:', data);
  };

  const fields = [
    {
      name: 'name',
      validation: yup.string().required('Name is required'),
    },
    {
      name: 'email',
      validation: yup.string().email('Invalid email').required('Email is required'),
    },
    {
      name: 'message',
      validation: yup.string().required('Message is required').min(10, 'Message is too short'),
    },
  ];

  return (
    <div>
      <Typography variant="h4">Contact Form</Typography>
      <AdvancedMUIForm fields={fields} onSubmit={onSubmit} />
    </div>
  );
};

export default MyForm;
