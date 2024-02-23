import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import ApiCRUD from './ApiCRUD'
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    gmail: yup.string().email().required(),
    mobileno: yup.number().required(),
    age: yup.number().required().integer(),
    address: yup.string().required(),
    aadharaadharcardno: yup.number().required(),
    pincode: yup.number().required(),
    bloodGroup: yup.string().required(),
    ocupation: yup.string().required(),
}).required();

function UserForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [users, setUsers] = useState([]);

    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log("data", data);
        axios.post("http://192.168.0.115:5001/api/saveFront/frontfrom", data)
            .then((response) => {
                console.log(response);
                reset();
                toast.success('User created', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            })
            .catch((error) => {
                console.log("Error" + error);
                toast.error('Error', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            })
    };


    return (
        <div className='p-4 h-[100%]'>
            <form onSubmit={handleSubmit(onSubmit)} className='mb-4 border shadow-lg rounded mx-auto px-10 py-6 md:w-[34vw] space-y-3'>
                <div className='flex items-center justify-center space-x-3'>
                    <TextField
                        size='small'
                        label="First Name"
                        placeholder='First Name'
                        variant="outlined"
                        {...register("firstname")}
                        error={!!errors.firstname}
                    />
                    <TextField
                        size='small'
                        label="Last Name"
                        placeholder='Last Name'
                        variant="outlined"
                        {...register("lastname")}
                        error={!!errors.lastname}
                    />
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <TextField
                        size='small'
                        label="Email"
                        placeholder='Email'
                        variant="outlined"
                        {...register("gmail")}
                        error={!!errors.gmail}
                    />
                    <TextField
                        size='small'
                        label="Mobile No"
                        type='number'
                        placeholder='Mobile No'
                        variant="outlined"
                        {...register("mobileno")}
                        error={!!errors.mobileno}
                    />
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <TextField
                        size='small'
                        label="Age"
                        type='number'
                        placeholder='Age'
                        variant="outlined"
                        {...register("age")}
                        error={!!errors.age}
                    />
                    <TextField
                        size='small'
                        label="Aadhar No"
                        placeholder='Aadhar No'
                        variant="outlined"
                        {...register("aadharaadharcardno")}
                        error={!!errors.aadharaadharcardno}
                    />
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <TextField
                        size='small'
                        label="Address"
                        placeholder='Address'
                        variant="outlined"
                        {...register("address")}
                        error={!!errors.address}
                    />
                    <TextField
                        size='small'
                        label="Pincode"
                        type='number'
                        placeholder='Pincode'
                        variant="outlined"
                        {...register("pincode")}
                        error={!!errors.pincode}
                    />
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <TextField
                        size='small'
                        label="Blood Group"
                        placeholder='Blood Group'
                        variant="outlined"
                        {...register("bloodGroup")}
                        error={!!errors.bloodGroup}
                    />
                    <TextField
                        size='small'
                        label="Occupation"
                        placeholder='Ocupation'
                        variant="outlined"
                        {...register("ocupation")}
                        error={!!errors.ocupation}
                    />
                </div>
                <button type='submit' className='py-1 px-5 mt-2 w-full bg-green-600 text-white rounded-md shadow-lg border-none transition-all hover:bg-green-700'>Submit</button>
            </form>

            <ApiCRUD users={users} setUsers={setUsers} />
        </div>
    );
}

export default UserForm;
