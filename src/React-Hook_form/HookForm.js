import React, { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputLabel, Modal, Fade, MenuItem, Select, FormControl } from '@mui/material';
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FcRules } from "react-icons/fc";
import Tooltip from '@mui/material/Tooltip';

function HookForm() {
    const schema = yup.object({
        Prefix: yup.string().required(),
        Firstname: yup.string().required(),
        Lastname: yup.string().required(),
        abcgmail: yup.string().email().required(),
        number: yup.string().matches(/^[0-9]{10}$/).required(),
        date: yup.string().required(),
        Address: yup.string().required(),
        // image: yup.string().required()
    });

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
        resolver: yupResolver(schema),
    });

    const [users, setUsers] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [viewUserIndex, setViewUserIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [table, setTable] = useState(null);
    const [prefix, setPrifix] = useState('');

    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    }
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
            updatedUsers[editingIndex] = { ...data, image: imageFile };
            setUsers(updatedUsers);
            setEditingIndex(null);
        } else {
            setUsers([...users, { ...data, image: imageFile }]);
            console.log(data);
        }
        reset();
        setImageFile(null);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        const user = users[index];
        setValue("Prefix", user.Prefix);
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
        <div className='pt-5 bg-gray-200 h-screen'>
            <h1 className='text-center text-[20px] font-semibold'>Registration Form</h1>
            <div className='mt-2 flex items-center justify-center pt-3 bg-white w-[33.2vw] mx-auto'>
                <div className='border-[2px] h-[19.9vh] w-[7.5vw]'>
                    <button onClick={handleButtonClick} style={{ cursor: 'pointer', padding: '6.2px' }}>
                        {imageFile ? (
                            <>
                                <img className='' src={URL.createObjectURL(imageFile)} alt="Uploaded" style={{ maxWidth: '100px' }} />
                                <img className='h-6 pt-1 mx-auto z-10' src='https://cdn.icon-icons.com/icons2/1380/PNG/512/vcsnormal_93488.png' alt='' />
                            </>
                        ) : (
                            <>
                                <img src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png" alt="Dummy Person" style={{ width: '100px', height: '100px', marginBottom: '5px' }} />
                                <p className='text-sm'>+Upload</p>
                            </>
                        )}
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='border py-2 w-1/3 mx-auto shadow-lg bg-white'>
                <div className=' pt-2 p-4 mx-auto bg-[#ffffff1d] border-black backdrop-blur-[10px]'>
                    <div className='flex items-center space-x-3 mt-2'>
                        <FormControl sx={{ width: '85px' }}>
                            <InputLabel id="demo-simple-select-label" size='small'>Prefix</InputLabel>
                            <Select
                                label="Prefix"
                                placeholder='Prefix'
                                size='small'
                                {...register("Prefix")}
                                sx={{ height: '42px' }}
                                aria-label="Prefix"
                                variant="outlined"
                                error={errors.Prefix ? true : false} >
                                <MenuItem value={'Mr.'}>Mr.</MenuItem>
                                <MenuItem value={'Mis.'}>Mis.</MenuItem>
                                <MenuItem value={'Mrs.'}>Mrs.</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            sx={{ width: '12vw' }}
                            label="First Name*"
                            size='small'
                            {...register("Firstname")}
                            variant="outlined"
                            error={errors.Firstname ? true : false}
                        />
                        <TextField
                            sx={{ width: '12vw' }}
                            label="Last Name*"
                            size='small'
                            variant="outlined"
                            {...register("Lastname")}
                            error={errors.Lastname ? true : false}
                        />
                    </div>
                    <div className='flex items-center mt-2 space-x-2'>
                        <TextField
                            sx={{ width: '15.5vw' }}
                            label="Email*"
                            size='small'
                            variant="outlined"
                            {...register("abcgmail")}
                            error={errors.abcgmail ? true : false}
                        />
                        <TextField
                            sx={{ width: '15.5vw' }}
                            type='number'
                            label='Mobile No*'
                            size='small'
                            variant="outlined"
                            {...register("number")}
                            error={errors.number ? true : false}
                        />
                    </div>
                    <div className=' mt-3 flex items-center space-x-2'>
                        <TextField
                            sx={{ width: '15.5vw' }}
                            label=""
                            type='date'
                            size='small'
                            variant="outlined"
                            {...register("date")}
                            error={errors.date ? true : false}
                        />
                        <TextField
                            sx={{ width: '15.5vw' }}
                            label="Address"
                            size='small'
                            variant="outlined"
                            {...register("Address")}
                            error={errors.Address ? true : false}
                        />
                    </div>

                    <div className='text-center mt-3 rounded'>
                        <button type='submit' className='bg-green-800 text-white py-2 px-8 mx-auto rounded'>
                            {editingIndex !== null ? "Update" : "Submit"}
                        </button>
                        {users.length > 0 && (
                            <Tooltip title="Table" arrow >
                                <button class="float-right mt-2" type='button' onClick={() => setTable(true)}><FcRules size={30} /></button>
                            </Tooltip>
                        )}
                    </div>
                </div>
            </form>
            {
                table && (
                    <table className='w-[80%] border mt-5 mx-auto shadow-lg'>
                        <thead className='bg-gray-800 text-white'>
                            <tr className='font-medium bg-gray-800 text-white'>
                                <th className='font-medium py-1.5'>Prefix</th>
                                <th className='font-medium py-1.5'>First Name</th>
                                <th className='font-medium py-1.5'>Last Name</th>
                                <th className='font-medium py-1.5'>Email</th>
                                <th className='font-medium py-1.5'>Mobile Number</th>
                                <th className='font-medium py-1.5'>Birth Date</th>
                                <th className='font-medium py-1.5'>Address</th>
                                <th className='font-medium py-1.5'>Actions</th>
                                <th className='bg-white'>
                                    <Tooltip title=" Close Table" arrow placement='right'>
                                        <button className='float-righ' type='button' onClick={() => setTable(false)}>❌</button>
                                    </Tooltip>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td className='text-center py-2'>{user.Prefix}</td>
                                    <td className='text-center py-2'>{user.Firstname}</td>
                                    <td className='text-center py-2'>{user.Lastname}</td>
                                    <td className='text-center py-2'>{user.abcgmail}</td>
                                    <td className='text-center py-2'>{user.number}</td>
                                    <td className='text-center py-2'>{user.date}</td>
                                    <td className='text-center py-2'>{user.Address}</td>
                                    <td className='text-center py-2 flex justify-center items-center space-x-3'>
                                        <Tooltip title="Edit" arrow >
                                            <button onClick={() => handleEdit(index)}><RiPencilFill size={20} /></button>
                                        </Tooltip>
                                        <Tooltip title="Delete" arrow >
                                            <button onClick={() => handleDelete(index)}><MdDelete size={20} /></button>
                                        </Tooltip>
                                        <Tooltip title="View" arrow >
                                            <button onClick={() => handleOpen(index)}><FaEye size={20} /></button>
                                        </Tooltip>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ top: '8%' }}
                closeAfterTransition>
                <Fade in={open}>
                    <div className='bg-white p-5 w-[60vw] h-[31vh] mx-auto mt-20'>
                        {viewUserIndex !== null && (
                            <div>
                                <button type='button' className='text-red-600 border-[2px] border-red-600 float-right' onClick={handleClose}><RxCross2 size={20} /> </button>
                                <h2 id="modal-modal-title" className='text-center text-[25px] font-semibold'>User Information</h2>
                                <div className='border flex justify-between mt-3 py-2 px-4'>
                                    <div className=''>
                                        <p className=' text-gray-600 font-semibold text-[17px]'> First Name: <span className='font-medium text-black'>{users[viewUserIndex].Prefix + "" + users[viewUserIndex].Firstname + "" + users[viewUserIndex].Lastname}</span></p>
                                        <p className='py-2 text-gray-600 font-semibold text-[17px]'> Email: <span className='font-medium text-black'>{users[viewUserIndex].abcgmail}</span></p>
                                        <p className=' text-gray-600 font-semibold text-[17px]'> Mobile Number: <span className='font-medium text-black'>{users[viewUserIndex].number}</span></p>
                                    </div>
                                    <div className=''>
                                        <p className=' text-gray-600 font-semibold text-[17px]'>Birth Date: <span className='font-medium text-black'>{users[viewUserIndex].date}</span></p>
                                        <p className='py-2 text-gray-600 font-semibold text-[17px]'>Address:<span className='font-medium text-black'> {users[viewUserIndex].Address}</span></p>
                                    </div>
                                    <div>
                                        {users[viewUserIndex].image ? (
                                            <>
                                                <p className=''></p>
                                                <img className='h-28 shadow-lg' src={URL.createObjectURL(users[viewUserIndex].image)} alt="User" />
                                            </>
                                        ) : (
                                            <img src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png" alt="Dummy User" className='h-12' />
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}

export default HookForm;
