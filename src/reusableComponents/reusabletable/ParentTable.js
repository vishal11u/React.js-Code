import React, { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import dayjs from "dayjs";
import FormFields from './RegistrationForm';
import UserTable from './FormTable';
import UserModal from './InfoModal';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function HookForm() {
    const schema = yup.object({
        Prefix: yup.string().required(),
        Firstname: yup.string().required(),
        Lastname: yup.string().required(),
        abcgmail: yup.string().email().required(),
        number: yup.string().matches(/^[0-9]{10}$/).required(),
        Address: yup.string().required(),
        City: yup.string().required(),
        birthDate: yup.string().required()
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
    const [birthDate, setBirthDate] = React.useState(dayjs());
    const [age, setAge] = React.useState({ years: 0, months: 0, days: 0 });

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
            toast.success('Registartion Successfully', {
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
            console.log(data);
        }
        reset();
        setImageFile(null);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        const user = users[index];
        // setValue("Prefix", user.Prefix);
        setValue("Firstname", user.Firstname);
        setValue("Lastname", user.Lastname);
        setValue("abcgmail", user.abcgmail);
        setValue("number", user.number);
        setValue("Address", user.Address);
        setValue("City", user.City)
        setBirthDate(dayjs(user.birthDate));
        setTable(false)
    };

    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    const handleDateChange = (date) => {
        setBirthDate(date);
        const formattedDate = date.format('YYYY-MM-DD');
        setValue("birthDate", formattedDate);
        const today = dayjs();
        const years = today.diff(date, 'year');
        const birthDatePlusYears = date.add(years, 'year');
        const months = today.diff(birthDatePlusYears, 'month');
        const birthDatePlusMonths = birthDatePlusYears.add(months, 'month');
        const days = today.diff(birthDatePlusMonths, 'day');
        setAge({ years, months, days });
    };

    return (
        <div className='pt-3 bg-gray-200 h-screen'>
            <div className='bg-white py-4 w-1/3 px-5 shadow-lg rounded mx-auto mt-[6%]'>
                {/* Form component */}
                <FormFields register={register} errors={errors} birthDate={birthDate} setTable={setTable}
                    handleDateChange={handleDateChange} age={age} handleButtonClick={handleButtonClick} imageFile={imageFile}
                    fileInputRef={fileInputRef} handleImageChange={handleImageChange} handleSubmit={handleSubmit} onSubmit={onSubmit}
                    editingIndex={editingIndex} users={users} />
                {/* Table component */}
                <UserTable users={users} handleEdit={handleEdit} handleDelete={handleDelete} handleClose={handleClose}
                    table={table} setTable={setTable} handleOpen={handleOpen}/>
                {/* Modal component */}
                <UserModal open={open} handleClose={handleClose} users={users} viewUserIndex={viewUserIndex} />
            </div>
        </div>
    );
}

export default HookForm;
