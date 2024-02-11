import React from 'react';

class LifeCycleMethods extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [{
                id: "",
                name: "",
                username: "",
                email: "",
                phone: "",
                website:"",
                // company:""
            }]
        }
    };

    componentDidMount() {
        console.log('In component did mount');
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(res => {
                this.setState({ data: res });
            })
            .catch(error => console.error("Error fetching data:", error));
    };

    render() {
        return (
            <div>
                <table style={{ border: "1px solid black" }}>
                    <thead>
                        <tr style={{ border: "1px solid black" }}>
                            <th style={{ border: "1px solid black" }}>Id</th>
                            <th style={{ border: "1px solid black" }}>Name</th>
                            <th style={{ border: "1px solid black" }}>User Name</th>
                            <th style={{ border: "1px solid black" }}>Email</th>
                            <th style={{ border: "1px solid black" }}>Phone</th>
                            <th style={{ border: "1px solid black" }}>Website</th>
                            <th style={{ border: "1px solid black" }}>Company</th>
                        </tr>
                    </thead>
                    <tbody >
                        {this.state.data.map((list) => (
                            <tr key={list.id} style={{ border: "1px solid black" }}>
                                <td style={{ border: "1px solid black" }}>{list.id}</td>
                                <td style={{ border: "1px solid black" }}>{list.name}</td>
                                <td style={{ border: "1px solid black" }}>{list.username}</td>
                                <td style={{ border: "1px solid black" }}>{list.email}</td>
                                <td style={{ border: "1px solid black" }}>{list.phone}</td>
                                <td style={{ border: "1px solid black" }}>{list.website}</td>
                                <td style={{ border: "1px solid black" }}>{list.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LifeCycleMethods;





