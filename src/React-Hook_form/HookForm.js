import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function HookForm() {
    const schema = yup.object({
        Firstname: yup.string().required("please enter your first Name"),
        Lastname: yup.string().required("please enter your last Name"),
        pFirstname: yup.string().required("please enter your first Name"),
        plastname: yup.string().required("please enter your last Name"),
        mFirstname: yup.string().required("please enter your first Name"),
        mlastname: yup.string().required("please enter your last Name"),
        abcgmail: yup.string().required("Enter the Valid gmail"),
        number: yup.string().required("Please enter your Mobile number "),
        date: yup.string().required("Enter your Birthdate date"),
        Address: yup.string().required("Please enter your address"),
        gender: yup.string().required("Please select your gender"),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const [gender, setGender] = useState('');
    const [userdata, setUserdata] = useState([]);

    const onSubmit = (data) => {
        console.log("data", data);
        setUserdata([...userdata, data]);
    }

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-1/2 pt-2 p-4 mx-auto bg-[#ffffff1d] pb-2 border-black backdrop-blur-[10px]'>
                <h1 className='text-center mt-1 font-bold'>LOGIN FORM</h1>
                <InputLabel className='mt-2 ml-2'> Student Name : </InputLabel>
                <div className='grid grid-cols-2 gap-4 mt-2'>
                    <TextField
                        label="First Name"
                        size='small'
                        {...register("Firstname")}
                        variant="outlined"
                        error={errors.Firstname?.message}
                        helperText={errors.Firstname?.message}
                    />
                    <TextField
                        label="Last Name"
                        size='small'
                        variant="outlined"
                        {...register("Lastname")}
                        error={errors.Lastname?.message}
                        helperText={errors.Lastname?.message}
                    />
                </div>
                <InputLabel className='mt-2 ml-2'> Parent Name </InputLabel>
                <div className='grid grid-cols-2 gap-4 mt-2'>
                    <TextField
                        label="First Name"
                        size='small'
                        variant="outlined"
                        {...register("pFirstname")}
                        error={errors.pFirstname?.message}
                        helperText={errors.pFirstname?.message}
                    />
                    <TextField
                        label="Last Name"
                        size='small'
                        variant="outlined"
                        {...register("plastname")}
                        error={errors.plastname?.message}
                        helperText={errors.plastname?.message}
                    />
                </div>
                <InputLabel className='mt-2 ml-2'> Mother Name</InputLabel>
                <div className='grid grid-cols-2 gap-4 mt-2'>
                    <TextField
                        label="First Name"
                        size='small'
                        variant="outlined"
                        {...register("mFirstname")}
                        error={errors.mFirstname?.message}
                        helperText={errors.mFirstname?.message}
                    />
                    <TextField
                        label="Last Name"
                        size='small'
                        variant="outlined"
                        {...register("mlastname")}
                        error={errors.mlastname?.message}
                        helperText={errors.mlastname?.message}
                    />
                </div>
                <div className='flex justify-around md:grid grid-cols-1 mt-2'>
                    <InputLabel className='mt-2 ml-2'>E-mail</InputLabel>
                    <TextField
                        label="abc@gmail.com"
                        size='small'
                        variant="outlined"
                        {...register("abcgmail")}
                        error={errors.abcgmail?.message}
                        helperText={errors.abcgmail?.message}
                    />
                    <InputLabel className='mt-2 ml-2'>Mobile No</InputLabel>
                    <TextField
                        type='number'
                        label='0000000000'
                        size='small'
                        variant="outlined"
                        {...register("number")}
                        error={errors.number?.message}
                        helperText={errors.number?.message}
                    />
                </div>
                <InputLabel className='mt-2 ml-2' >Birth Date</InputLabel>
                <div className='space-x-4 md:grid grid-cols-1 md:gap-y-2 justify-between my-4'>
                    <TextField
                        label=""
                        type='date'
                        size='small'
                        variant="outlined"
                        {...register("date")}
                        error={errors.date?.message}
                        helperText={errors.date?.message}
                    />
                    <FormControl className="w-[22%] mt-2">
                        <InputLabel>Gender</InputLabel>
                        <Select
                            size="small"
                            value={gender}
                            onChange={(e) => {
                                setGender(e.target.value);
                            }}
                            label="Gender"
                            {...register("gender")}
                            error={errors.gender?.message} 
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                        {errors.gender && <p className='text-[12px] text-red-600'>{errors.gender.message}</p>}

                    </FormControl>
                </div>
                <InputLabel className='mt-2 ml-2'>Address </InputLabel>
                <div className='mt-4'>
                    <TextField
                        label="Address"
                        size='small'
                        variant="outlined"
                        {...register("Address")}
                        error={errors.Address?.message}
                        helperText={errors.Address?.message}
                    />
                </div>
                <div className='text-center rounded'>
                    <button type='submit' className='bg-green-800 text-white p-2 mx-auto rounded'>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default HookForm;
