import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ApiCRUD({ users, setUsers }) {
    console.log('data is' + users);

    const handleData = () => {
        axios.get("http://192.168.0.115:5001/api/saveFront/getFrontendFrom")
            .then((response) => {
                console.log(response.data.result);
                let getData = (response.data.result)
                setUsers(getData)
            })
            .catch((error) => {
                console.log("error is" + error);
            })
    }

    const handleShow = () => {
        axios.get("http://192.168.0.115:5001/api/saveFront/getFrontendFrom")
            .then((response) => {
                console.log(response.data.result);
                setUsers(response.data.result)
            })
            .catch((error) => {
                console.log("error is" + error);
            })
    }

    const dataDelete = (i, id) => {
        axios.delete(`http://192.168.0.115:5001/api/saveFront/deletedata/${id}`)
            .then((response) => {
                console.log(response.data.result);
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

    const handleDelete = (i) => {
        let remove = ([...users])
        remove.splice(i, 1)
        setUsers(remove)
    }

    React.useEffect(() => {
        handleData();
        handleShow();
    }, [])

    const handleSearch = (searchQuery) => {
        if (searchQuery.trim() !== '') {
            const res = users.filter((user) =>
                user.firstname.toLowerCase().includes(searchQuery.toLowerCase()) ||
                user.mobileno.includes(searchQuery)
            );
            setUsers(res);
        } else {
            setUsers([...users]);
        }
    };


    return (
        <TableContainer component={Paper}>
            <TextField size='small' className='float-right' sx={{ margin: '7px 12px' }} label='Enter Name' variant='outlined' placeholder='Enter Name' onChange={(e) => handleSearch(e.target.value)} />
            <Table sx={{ color: 'white' }} aria-label="simple table">
                <TableHead sx={{ backgroundColor: '#242424', }}>
                    <TableRow sx={{ color: 'white' }}>
                        <TableCell sx={{ color: 'white' }}>Firstname</TableCell>
                        <TableCell sx={{ color: 'white' }}>Lastname</TableCell>
                        <TableCell sx={{ color: 'white' }}>Age</TableCell>
                        <TableCell sx={{ color: 'white' }}>Mobile</TableCell>
                        <TableCell sx={{ color: 'white' }}>Email</TableCell>
                        <TableCell sx={{ color: 'white' }}>Address</TableCell>
                        <TableCell sx={{ color: 'white' }}>Aadhar Card</TableCell>
                        <TableCell sx={{ color: 'white' }}>Pincode</TableCell>
                        <TableCell sx={{ color: 'white' }}>Blood Group</TableCell>
                        <TableCell sx={{ color: 'white' }}>Occupation</TableCell>
                        <TableCell sx={{ color: 'white' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row, i) => (
                        <TableRow key={i.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell> {row.firstname}</TableCell>
                            <TableCell>{row.lastname}</TableCell>
                            <TableCell>{row.gmail}</TableCell>
                            <TableCell>{row.mobileno}</TableCell>
                            <TableCell>{row.age}</TableCell>
                            <TableCell> {row.address}</TableCell>
                            <TableCell>{row.aadharaadharcardno}</TableCell>
                            <TableCell>{row.pincode}</TableCell>
                            <TableCell>{row.bloodGroup}</TableCell>
                            <TableCell>{row.ocupation}</TableCell>
                            <TableCell className='cursor-pointer' onClick={() => dataDelete(row.id, i)}><MdDelete size={23} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
