import React from "react";

//  Parent Component //
function PropsDemo() {

    const message = "React Props!!!"

    const users = [{
        "id": 1,
        "name": "John"
    }, {
        "id": 2,
        "name": "Richard"
    }, {
        "id": 3,
        "name": "Marcus"
    }, {
        "id": 3,
        "name": "Tony"
    }];

    return (
        <div>
            <h1>Props Demo</h1>
            <ChildComponent message={message} userList={users} />
        </div>
    )
}

// Child component //

function ChildComponent(props) {
    return (
        <div>
            <h2>Child Component</h2>
            <p>Message : {props.message}</p>
            {/* =================================================== */}
            <ul>
                {props.userList.map((user)=>(
                    <li>{user.name}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default PropsDemo