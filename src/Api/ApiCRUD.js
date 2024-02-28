import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { MdDelete, MdEdit } from "react-icons/md";
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from "react-icons/rx";
import Tooltip from '@mui/material/Tooltip';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ApiCRUD({ table, setTable, users, setUsers, handleEdit }) {
    
    const getData = "http://192.168.0.115:5001/api/saveFront/getallfrontendfrom";

    useEffect(() => {
        handleData();
    }, []);

    const handleData = () => {
        axios.get(getData)
            .then((response) => {
                setUsers(response.data.result);
            })
            .catch((error) => {
                console.log("error is" + error);
            })
    };

    const dataDelete = (id, i) => {
        axios.delete(`http://192.168.0.115:5001/api/saveFront/deletedata/${id}`)
            .then((response) => {
                console.log(response.data);
                if (i !== null) {
                    let newData = [...users];
                    newData.splice(i, 1)
                    setUsers(newData);
                }
                toast.success('Data deleted', {
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
                console.log("error is" + error);
                toast.error('Server error', {
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

    const handleSearch = (searchQuery) => {
        if (searchQuery !== null) {
            const res = users.filter((user) =>
                user.firstname.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setUsers(res);
        } else {
            handleData();
        }
    };

    return (
        <TableContainer component={Paper} sx={{ width: '90%', margin: 'auto ', marginBottom: '30px' }}>
            {table && (
                <>
                    <div className='flex justify-between w-full items-center p-2.5'>
                        <Tooltip title="close" arrow placement='top'>
                            <button type='button' className='text-red-600 border-[2px] h-6 border-red-600 float-right' onClick={() => setTable(false)}><RxCross2 size={20} /> </button>
                        </Tooltip>
                        <TextField size='small' className='float-right' sx={{ width: '17%' }} label='Search by Name/Mobileno.' variant='outlined' placeholder='Search by Name/Mobileno.' onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                    <Table sx={{ color: 'white' }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#242424', }}>
                            <TableRow sx={{ color: 'white' }}>
                                {Object.keys(users[0]).map((key) => (
                                    <TableCell key={key}>{key}</TableCell>
                                ))}
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((row, i) => (
                                <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                    {Object.values(row).map((value, j) => (
                                        <TableCell key={j}>{value}</TableCell>
                                    ))}
                                    <TableCell>
                                        <MdEdit className='cursor-pointer' size={23} onClick={() => handleEdit(row)} />
                                        <MdDelete className='cursor-pointer' size={23} onClick={() => dataDelete(row.Id, i)} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </>
            )}
        </TableContainer>
    );
}

export default React.memo(ApiCRUD);
