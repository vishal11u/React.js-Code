import React from 'react';

class LifeCycleMethods extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
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
                <div className='text-center text-4xl py-10 font-semibold'>
                    <h1 className=''>📅 Api Table Data </h1>
                </div>
                <table>
                    <tr >
                        <th rowSpan={3} >Id</th>
                        <th rowSpan={3} >Name</th>
                        <th rowSpan={3} >User Name</th>
                        <th rowSpan={3} >Email</th>
                        <th rowSpan={3} >Phone</th>
                        <th rowSpan={3} >Website</th>
                        <th colSpan={5} >Address</th>
                        <th colSpan={5} >Company</th>
                    </tr>
                    <tr>
                        <th rowSpan={2} >City</th>
                        <th rowSpan={2} >Zipcode</th>
                        <th rowSpan={2} >Suite</th>
                        <th rowSpan={2} >geo</th>
                        <th rowSpan={2} >Name</th>
                        <th rowSpan={2} >Catch</th>
                        <th rowSpan={2} >bs</th>

                    </tr>
                    <tr>
                        <th>lng</th>
                        <th>lat</th>
                    </tr>
                    <tbody>
                        {this.state.data.map((list) => (
                            <tr key={list.id} >
                                <td >{list.id}</td>
                                <td >{list.name}</td>
                                <td >{list.username}</td>
                                <td >{list.email}</td>
                                <td >{list.phone}</td>
                                <td >{list.website}</td>
                                <td >{list.address.city}</td>
                                <td >{list.address.zipcode}</td>
                                <td >{list.address.suite}</td>
                                <td >{list.address.geo.lng}</td>
                                <td >{list.address.geo.lat}</td>
                                <td >{list.company.name}</td>
                                <td >{list.company.catchPhrase}</td>
                                <td >{list.company.bs}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default LifeCycleMethods;
