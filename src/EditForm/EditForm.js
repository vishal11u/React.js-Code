import React, { useState } from 'react'
import './EditForm.css'

function EditForm() {
    let [array, setArray] = useState([])
    let [inputdata, setInputdata] = useState({ name: "", number: "", mobileno: "", city: "" })
    let [index, setIndex] = useState()
    let [bolin, setBolin] = useState(false)
    let { name, number, mobileno, city } = inputdata;
// -------------------------------------------------------------------------------//
    function data(e) {
        setInputdata({ ...inputdata, [e.target.name]: e.target.value })
    };
// -------------------------------------------------------------------------------//
    function addinputdata() {
        if (name === "" && number === "" && mobileno === "" && city === "") {
            alert("Enter Proper Imformation")
        }
        else {
            setArray([...array, { name, number, mobileno, city }])
            setInputdata({ name: "", number: "", mobileno: "", city: "" })
        }
    };
// ------------------------------------------------------------------------------//
    function deletedata(i) {
        console.log(i, "this index row want to be delete ")
        let total = [...array]
        total.splice(i, 1)
        setArray(total)
    };
// ----------------------------------------------------------------------------//
    function updatedata(i) {
        let { name, number, mobileno, city } = array[i]
        setInputdata({ name, number, mobileno, city })
        setBolin(true)
        setIndex(i)
    };

    function updateinfo() {
        let total = [...array]
        total.splice(index, 1, { name, number, mobileno, city })
        setArray(total)
        setBolin(false)
        setInputdata({ name: "", number: "", mobileno: "", city: "" })
    };
// ------------------------------------------------------------------------------//

    return (
        
        <div>
            <input type='text' value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name...' onChange={data}></input>
            <input type='number' value={inputdata.mobileno || ""} name='mobileno' placeholder='Mobile No...' onChange={data}></input>
            <input type='text' value={inputdata.city || ""} name='city' autoComplete='off' placeholder='Enter City...' onChange={data}></input>
            <input type='number' value={inputdata.number || ""} name='number' placeholder='Enter Roll No...' onChange={data}></input>
            <button id='btn' onClick={!bolin ? addinputdata : updateinfo}>{!bolin ? 'Add data' : 'Update data'}</button><br />

{/* ----------------------------------------------------------------------------------------------- */}
            <table border="1" width="100%">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Mobile No</th>
                        <th>City</th>
                        <th>Roll No</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
{/* ------------------------------------------------------------------------------------------------ */}
                    {array.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.name}</td>
                                <td>{item.mobileno}</td>
                                <td>{item.city}</td>
                                <td>{item.number}</td>
                                <td><button onClick={() => updatedata(i)} >✏️</button></td>
                                <td><button id='red-btn' onClick={() => deletedata(i)}>❌</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default EditForm;