import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputLabel, Modal, Backdrop, Fade } from '@mui/material';
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

function HookForm() {
    const schema = yup.object({
        Firstname: yup.string().required("please enter your first Name"),
        Lastname: yup.string().required("please enter your last Name"),
        abcgmail: yup.string().required("Enter the Valid gmail"),
        number: yup.string().required("Please enter your Mobile number "),
        date: yup.string().required("Enter your Birthdate date"),
        Address: yup.string().required("Please enter your address"),
    }).required();

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema),
    });

    const [users, setUsers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [viewUserIndex, setViewUserIndex] = useState(null);
    const [open, setOpen] = useState(false);

    const handleOpen = (index) => {
        setViewUserIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {
        if (editingIndex !== null) {
            const updatedUsers = [...users];
            updatedUsers[editingIndex] = data;
            setUsers(updatedUsers);
            setEditingIndex(null);
        } else {
            setUsers([...users, data]);
        }
        reset();
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        const user = users[index];
        setValue("Firstname", user.Firstname);
        setValue("Lastname", user.Lastname);
        setValue("abcgmail", user.abcgmail);
        setValue("number", user.number);
        setValue("date", user.date);
        setValue("Address", user.Address);
    };

    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    return (
        <div>
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
                    <div className='space-x-4 md:grid grid-cols-2 w-full md:gap-y-2 justify-between my-4'>
                        <TextField
                            label=""
                            type='date'
                            size='small'
                            variant="outlined"
                            {...register("date")}
                            error={errors.date?.message}
                            helperText={errors.date?.message}
                        />
                    </div>
                    <InputLabel className='mt-2 ml-2'>Address </InputLabel>
                    <div className='mt-4 w-full'>
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
                        <button type='submit' className='bg-green-800 text-white p-2 mx-auto rounded'>
                            {editingIndex !== null ? "Update" : "Submit"}
                        </button>
                    </div>
                </div>
            </form>

            <table className='w-full border'>
                <thead className='bg-gray-800 text-white'>
                    <tr className='font-medium bg-gray-800 text-white'>
                        <th className='font-medium'>First Name</th>
                        <th className='font-medium'>Last Name</th>
                        <th className='font-medium'>Email</th>
                        <th className='font-medium'>Mobile Number</th>
                        <th className='font-medium'>Birth Date</th>
                        <th className='font-medium'>Address</th>
                        <th className='font-medium'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className='text-center'>{user.Firstname}</td>
                            <td className='text-center'>{user.Lastname}</td>
                            <td className='text-center'>{user.abcgmail}</td>
                            <td className='text-center'>{user.number}</td>
                            <td className='text-center'>{user.date}</td>
                            <td className='text-center'>{user.Address}</td>
                            <td className='text-center'>
                                <button onClick={() => handleEdit(index)}><RiPencilFill /></button>
                                <button onClick={() => handleDelete(index)}><MdDelete /></button>
                                <button onClick={() => handleOpen(index)}><FaEye /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                closeAfterTransition>
                <Fade in={open}>
                    <div className='bg-white p-4 w-1/2 mx-auto mt-20'>
                        {viewUserIndex !== null && (
                            <div>
                                <h2 id="modal-modal-title">User Information</h2>
                                <p id="modal-modal-description">
                                    First Name: {users[viewUserIndex].Firstname}<br />
                                    Last Name: {users[viewUserIndex].Lastname}<br />
                                    Email: {users[viewUserIndex].abcgmail}<br />
                                    Mobile Number: {users[viewUserIndex].number}<br />
                                    Birth Date: {users[viewUserIndex].date}<br />
                                    Address: {users[viewUserIndex].Address}<br />
                                </p>
                            </div>
                        )}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default HookForm;
