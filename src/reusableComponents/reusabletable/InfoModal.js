import React from 'react';
import { Fade, Modal } from '@mui/material';
import { RxCross2 } from "react-icons/rx";

function UserModal({ open, handleClose, users, viewUserIndex }) {
    return (
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
                                <div className='space-y-4'>
                                    <p className=' text-gray-600 font-semibold text-[17px]'> Name: <span className='font-medium text-black'>{users[viewUserIndex].Prefix + "" + users[viewUserIndex].Firstname + "" + users[viewUserIndex].Lastname}</span></p>
                                    <p className=' text-gray-600 font-semibold text-[17px]'> Email: <span className='font-medium text-black'>{users[viewUserIndex].abcgmail}</span></p>
                                    <p className=' text-gray-600 font-semibold text-[17px]'> Mobile Number: <span className='font-medium text-black'>{users[viewUserIndex].number}</span></p>
                                </div>
                                <div className='space-y-4'>
                                    <p className=' text-gray-600 font-semibold text-[17px]'>Birth Date: <span className='font-medium text-black'>{users[viewUserIndex].birthDate}</span></p>
                                    <p className=' text-gray-600 font-semibold text-[17px]'>Address:<span className='font-medium text-black'> {users[viewUserIndex].Address}</span></p>
                                    <p className=' text-gray-600 font-semibold text-[17px]'>Country:<span className='font-medium text-black'> {users[viewUserIndex].City}</span></p>
                                </div>
                                <div className='overflow-hidden'>
                                    {users[viewUserIndex].image ? (
                                        <img className='h-28 shadow-lg' src={URL.createObjectURL(users[viewUserIndex].image)} alt="User" />
                                    ) : (
                                        <img src="https://www.pngitem.com/pimgs/m/581-5813504_avatar-dummy-png-transparent-png.png" alt="Dummy User" className='h-28 shadow border' />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Fade>
        </Modal>
    );
}

export default UserModal;
