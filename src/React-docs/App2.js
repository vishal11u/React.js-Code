import React from 'react'

function App2() {
    const userObj = {
        "firstname": "",
        "middlename": "",
        "lastname": ""
    }

    const [user, setUser] = React.useState(userObj);

    const handlechange = (event) => {
        console.log(event.target);
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const display = () => {
        console.log(user);
    }
    return (
        <div>
            <div className="d-1">
                <h1>Read Input</h1>
                <input type="text" name="firstname" placeholder="First Name" onChange={handlechange} />
                <br /><br />
                <input type="text" name="middlename" placeholder="Middle Name" onChange={handlechange} />
                <br /><br />
                <input type="text" name="lasttname" placeholder="Last Name" onChange={handlechange} />
                <br /><br />
                <button onClick={display}>Submit Here...</button>
            </div>
        </div>
    )
}

export default App2