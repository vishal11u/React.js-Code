import React from 'react';
import ReusableForm from './ReusableFormFeilds';

const MyForm = () => {
  const fields = [
    { name: 'name', label: 'Name', rules: { required: 'Name is required' } },
    { name: 'email', label: 'Email', rules: { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } } },
  ];

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <ReusableForm
        defaultValues={{ name: '', email: '' }}
        fields={fields}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default MyForm;
