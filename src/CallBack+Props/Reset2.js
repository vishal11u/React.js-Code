import React from 'react';

function Reset2({ data, setData, updateData }) {
    const deleteData = (i) => {
        let row = [...data];
        row.splice(i, 1);
        setData(row);
    };

    return (
        <div className='flex justify-center mt-8 '>
            <table className="object-center w-[40vw] rounded bg-white shadow">
                <tr className='bg-gray-400'>
                    <th className='border'>Id</th>
                    <th className='border'>firstname </th>
                    <th className='border'>lastname</th>
                    <th className='border'>Edit</th>
                    <th className='border'>Delete</th>
                </tr>
                {data.map((list, i) => (
                    <tr key={i}>
                        <td className="text-center border">{i + 1}</td>
                        <td className="text-center border"> {list.firstname} </td>
                        <td className="text-center border" > {list.lastname} </td>
                        <td className="text-center cursor-pointer border" onClick={() => updateData(i)}>
                            ✏️
                        </td>
                        <td className="text-center cursor-pointer border" onClick={() => deleteData(i)}>
                            ❌
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default Reset2;