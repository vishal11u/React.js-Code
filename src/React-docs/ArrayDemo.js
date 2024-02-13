import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ArrayTask() {
    const demo = [
        {
            id: 1,
            name: "John",
            lname: "Doe",
            salary: "10,000",
            age: 11
        },
        {
            id: 2,
            name: "Mahesh",
            lname: "Dalle",
            salary: "40,000",
            age: 25
        },
        {
            id: 3,
            name: "Johni",
            lname: "Since",
            salary: "70,000",
            age: 19
        },
        {
            id: 4,
            name: "Mark",
            lname: "Zubarg",
            salary: "20,000",
            age: 16
        },
        {
            id: 5,
            name: "Elon",
            lname: "Musk",
            salary: "90,000",
            age: 10
        },
        {
            id: 6,
            name: "Jack",
            lname: "Snyder",
            salary: "50,000",
            age: 50
        },
        {
            id: 7,
            name: "Alice",
            lname: "Blue",
            salary: "80,000",
            age: 30
        },
        {
            id: 8,
            name: "Bob",
            lname: "Johnson",
            salary: "60,000",
            age: 22
        },
        {
            id: 9,
            name: "Emily",
            lname: "Machail",
            salary: "30,000",
            age: 40
        }
    ];

    const [task, setTask] = useState(demo);
    const [sortBy, setSortBy] = useState(null);

    const handleDelete = (id) => {
        const updatedTask = task.filter(item => item.id !== id);
        setTask(updatedTask);
    };

    const handleFilter = (key) => {
        if (sortBy === key) {
            setSortBy(null);
            setTask([...demo]);
        } else {
            setSortBy(key);
            const filteredData = task.slice().sort((a, b) => a[key] > b[key] ? 1 : -1);
            setTask(filteredData);
        }
    };

    const tableHeaders = Object.keys(demo[0]).filter(header => header !== 'id');

    return (
        <div>
            <h1 className='text-center font-semibold mt-8 text-2xl'>Ascending Order Check</h1>
            <div className='px-3 py-2 font-medium flex justify-center space-x-5 items-center mt-2'>
                {tableHeaders.map(header => (
                    <div key={header} className="flex items-center">
                        <Tooltip title="Cheak" arrow placement="bottom">
                            <Checkbox {...label} type='checkbox' onChange={() => handleFilter(header)} checked={sortBy === header} className="mr-2" />
                        </Tooltip>
                        <label>{header.charAt(0).toUpperCase() + header.slice(1)}</label>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-2">
                <table className='border-collapse border border-gray-800 w-1/3'>
                    <thead>
                        <tr className='bg-gray-800 text-white'>
                            <th className='px-3 py-2 font-medium'>Actions</th>
                            {tableHeaders.map(header => (
                                <th key={header} className='px-3 py-2 font-medium'>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {task.map((item) => (
                            <tr key={item.id} className="border-t border-gray-800">
                                <td className='px-3 py-1 text-center'>
                                    <Tooltip title="Delete">
                                        <IconButton onClick={() => handleDelete(item.id)}>
                                            <DeleteIcon sx={{ color: "red" }} />
                                        </IconButton>
                                    </Tooltip>
                                </td>
                                {tableHeaders.map(header => (
                                    <td key={header} className='px-3 py-2 text-center'>{item[header]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ArrayTask;
