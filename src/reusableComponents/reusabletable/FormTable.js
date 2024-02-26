import React from 'react';
import { RiPencilFill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import { RxCross2 } from "react-icons/rx";
import { Fade, Modal } from '@mui/material';

function Table({ handleEdit, table, users, handleDelete, handleOpen, handleClose, setTable }) {
    return (
        <>
            <Modal
                open={table}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{ top: '10%' }}
                closeAfterTransition
            >
                <Fade in={table}>
                    <div className='bg-white p-5 w-[80vw] mx-auto mt-20'>
                        <Tooltip title=" Close Table" arrow placement='top'>
                            <button className='float-right mb-2 border-[2px] border-red-600' type='button' onClick={() => setTable(false)}><RxCross2 className='text-red-600' size={19} /></button>
                        </Tooltip>
                        {users.length > 0 ? (
                            <table className='border mx-auto w-full shadow-lg'>
                                <thead className=''>
                                    <tr className='font-medium bg-gray-800 text-white'>
                                        <th className='font-medium py-1.5'>Prefix</th>
                                        <th className='font-medium py-1.5'>First Name</th>
                                        <th className='font-medium py-1.5'>Last Name</th>
                                        <th className='font-medium py-1.5'>Email</th>
                                        <th className='font-medium py-1.5'>Mobile Number</th>
                                        <th className='font-medium py-1.5'>Birth Date</th>
                                        <th className='font-medium py-1.5'>Address</th>
                                        <th className='font-medium py-1.5'>Country</th>
                                        <th className='font-medium py-1.5'>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className='bg-white'>
                                    {users.map((user, index) => (
                                        <tr key={index} className='border-b'>
                                            <td className='text-center py-2'>{user.Prefix}</td>
                                            <td className='text-center py-2'>{user.Firstname}</td>
                                            <td className='text-center py-2'>{user.Lastname}</td>
                                            <td className='text-center py-2'>{user.abcgmail}</td>
                                            <td className='text-center py-2'>{user.number}</td>
                                            <td className='text-center py-2'>{user.birthDate}</td>
                                            <td className='text-center py-2'>{user.Address}</td>
                                            <td className='text-center py-2'>{user.City}</td>
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
                        ) : (
                            <div className='text-center py-7'>
                                <h1 className='text-center text-3xl font-medium text-gray-600'>No Record Found</h1>
                                <p>(Register First)</p>
                            </div>
                        )}
                    </div>
                </Fade>
            </Modal>
        </>
    );
}

export default Table;
