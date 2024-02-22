import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { MdDelete } from "react-icons/md";

function TableForm() {
  const { register, handleSubmit, control, formState: { errors }, getValues } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "address"
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAppend = () => {
    const values = getValues("address");
    for (let i = 0; i < values.length; i++) {
      if (!values[i].street || !values[i].city || !values[i].district) {
        return alert();
      }
    }
    append({});
  };

  return (
    <div className='p-10'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, i) => (
          <div className='my-2 space-x-2 flex items-center' key={field.id}>
            <TextField
              label="Street"
              id={`street-${i}`}
              size="small"
              {...register(`address.${i}.street`)}
              error={errors?.address?.[i]?.street ? true : false}
              placeholder='Street'
            />
            <TextField
              label="City"
              id={`city-${i}`}
              size="small"
              {...register(`address.${i}.city`)}
              error={errors?.address?.[i]?.city ? true : false}
              placeholder='City'
            />
            <TextField
              label="District"
              id={`district-${i}`}
              size="small"
              {...register(`address.${i}.district`)}
              error={errors?.address?.[i]?.district ? true : false}
              placeholder='District'
            />
            <button
              type='button'
              onClick={() => remove(i)}
              className='py-2 px-3 bg-red-600 text-white rounded-md'
            >
              <MdDelete size={21} />
            </button>
          </div>
        ))}
        <button
          className='py-2 px-3 bg-blue-600 rounded-md text-white'
          type="button"
          onClick={handleAppend}
        >
          + Add Address
        </button>
        <button
          className='ml-5 border py-2 px-3 cursor-pointer bg-green-700 text-white rounded-md'
          type="submit"
          value="Submit"
        >Submit</button>
      </form>
    </div>
  )
}

export default TableForm;
