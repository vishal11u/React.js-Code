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

export default function ApiCRUD({ users, setUsers }) {
    const dataDelete = async (i,id) => {
        try {
            const response = await axios.delete(`http://192.168.0.115:5001/api/saveFront/deletedata/${id}`);
            const newUsers = response.data;
            setUsers(newUsers);
            let cut =(users[id])
            const dele = users.filter (item => item !== cut ) 
            setUsers(dele)
        } catch (error) {
            console.error("There was an error fetching the users:", error);
        }
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://192.168.0.115:5001/api/saveFront/getFrontendFrom");
            const res = response.data
            setUsers(res);
        } catch (error) {
            console.error("There was an error fetching the users:", error);
        }
    };

    React.useEffect(() => {
        fetchUsers();
    }, []);

    const handleSearch = async (searchQuery) => {
        const filteredUsers = users.filter((user) =>
            user.firstname.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setUsers(filteredUsers);
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
                        <TableRow key={i.firstname} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
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
                            <TableCell className='cursor-pointer' onClick={dataDelete}><MdDelete size={23} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}