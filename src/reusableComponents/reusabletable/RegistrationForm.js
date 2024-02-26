import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import ImageUpload from './ImageUpload';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Tooltip from '@mui/material/Tooltip';
import { FcRules } from "react-icons/fc";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


function FormFields({ register, errors, users, birthDate, handleDateChange, age, handleButtonClick, setTable, imageFile, fileInputRef, handleImageChange, handleSubmit, onSubmit, editingIndex, }) {
    return (
        <div>
            <div className=''>
                <ImageUpload fileInputRef={fileInputRef} handleImageChange={handleImageChange} imageFile={imageFile} handleButtonClick={handleButtonClick} />
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className=''>
                <div className='mx-auto bg-[#ffffff1d] backdrop-blur-[10px]'>
                    <div className='flex items-center space-x-3 mt-2'>
                        <FormControl sx={{ width: '88px' }}>
                            <InputLabel id="demo-simple-select-label" size='small'>Prefix*</InputLabel>
                            <Select
                                label="Prefix*"
                                placeholder='Prefix'
                                size='small'
                                {...register("Prefix")}
                                sx={{ height: '42px' }}
                                aria-label="Prefix*"
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
                            type='email'
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
                    <div className=' mt-2 flex items-center space-x-2'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DatePicker", "DatePicker"]} sx={{}}>
                                <DatePicker
                                    label="Birth Date"
                                    value={birthDate}
                                    onChange={handleDateChange}
                                    slotProps={{ textField: { size: 'small' } }}
                                />
                                <div className="">
                                    <TextField
                                        sx={{}}
                                        label="Age"
                                        value={age.years}
                                        size='small'
                                        variant="outlined"
                                    />
                                </div>
                                <div className=" space-x-2 flex">
                                    <TextField
                                        sx={{}}
                                        label="Years"
                                        value={age.years}
                                        size='small'
                                        variant="outlined"
                                    />
                                    <TextField
                                        sx={{}}
                                        label="Months"
                                        value={age.months}
                                        size='small'
                                        variant="outlined"
                                    />
                                    <TextField
                                        sx={{}}
                                        label="Days"
                                        value={age.days}
                                        size='small'
                                        variant="outlined"
                                    />
                                </div>
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className='mt-2 flex justify-between space-x-2'>
                        <TextField
                            label="Address*"
                            sx={{ width: '15.5vw' }}
                            size='small'
                            variant="outlined"
                            {...register("Address")}
                            error={errors.Address ? true : false}
                        />
                         <TextField
                            label="Country*"
                            sx={{ width: '15.5vw' }}
                            size='small'
                            variant="outlined"
                            {...register("City")}
                            error={errors.City ? true : false}
                        />
                    </div>

                    <div className='text-center flex justify-center items-center mt-3 rounded'>
                        <button type='submit' className='bg-green-800 shadow-lg text-white py-2 px-8 rounded'>
                            {editingIndex !== null ? "Update" : "Submit"}
                        </button>
                        {users.length > 0 && (
                            <Tooltip title="Open Table" arrow >
                                <button class="float-right mt-2" type='button' onClick={() => setTable(true)}><FcRules size={30} /></button>
                            </Tooltip>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormFields;
