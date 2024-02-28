import React, { useState} from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import ApiCRUD from './ApiCRUD';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcRules } from "react-icons/fc";
import Tooltip from '@mui/material/Tooltip';

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
    occupation: yup.string().required(),
}).required();

function UserForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const [users, setUsers] = useState([]);
    const [table, setTable] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isUpdateMode, setIsUpdateMode] = useState(false);

    const onSubmit = (data, e) => {
        e.preventDefault();
        if (isUpdateMode) {
            handleUpdate(data);
        } else {
            handleCreate(data);
        }
    };

    const handleCreate = (data) => {
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

    const handleUpdate = (data) => {
        axios.put(`http://192.168.0.115:5001/api/saveFront/updateData/${selectedUser.id}`, data)
            .then((response) => {
                console.log(response);
                const updatedUsers = users.map(user => {
                    if (user.id === selectedUser.id) {
                        return { ...user, ...data };
                    } else {
                        return user;
                    }
                });
                setUsers(updatedUsers);
                setSelectedUser(null);
                setIsUpdateMode(false);
                reset();
                toast.success('User updated', {
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
            });
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setIsUpdateMode(true);
        reset(user);
    };

    return (
        <div className='h-full w-full'>
            <form onSubmit={handleSubmit(onSubmit)} className='m-4 border shadow-lg mx-auto rounded pb-5 pt-2 w-full md:w-[70%] lg:w-[32%] space-y-3'>
                <img className='h-32 mx-auto relative ' src='https://img.freepik.com/free-vector/family-doctor-online-service-platform-healthcare-modern-medicine-treatment-expertize-diagnostic-online-appointment-flat-vector-illustration_613284-3026.jpg?t=st=1708665096~exp=1708668696~hmac=bc9b87ce3cc5aae34ccf15402861670cf04aeaad8996f2fbb7d793c0add452c5&w=996' alt='' />
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
                        placeholder='Age'
                        variant="outlined"
                        {...register("age")}
                        error={!!errors.age}
                    />
                    <TextField
                        size='small'
                        label="Aadhar Card No"
                        placeholder='Aadhar Card No'
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
                        placeholder='Occupation'
                        variant="outlined"
                        {...register("occupation")}
                        error={!!errors.occupation}
                    />
                </div>
                <div className='flex justify-center w-full items-center'>
                    <button type='submit' className='py-2 md:w-[50%] px-5 bg-green-600 text-white rounded-md shadow-lg border-none transition-all hover:bg-green-700'>
                        {isUpdateMode ? 'Update' : 'Submit'}
                    </button>
                    {users.length > 0 && (
                        <Tooltip title="Show Table" arrow>
                            <button className="drop-shadow-lg" type='button' onClick={() => setTable(true)}>
                                <FcRules size={30} />
                            </button>
                        </Tooltip>
                    )}
                </div>

            </form>

            <ApiCRUD users={users} setUsers={setUsers} table={table} setTable={setTable} handleEdit={handleEdit} />
        </div>
    );
}

export default UserForm;
