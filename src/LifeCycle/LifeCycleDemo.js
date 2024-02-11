import React from 'react'

class LifeCycleMethodsDemo extends React.Component {
    // constuctor use for intialize data
    constructor() {
        super()
        this.state = {  //
            number: 0, //variable
            userList: []
        }
    }

    componentDidMount() {
        console.log('In component did mount');
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(res => {
                console.log(res);
                this.setState({ userList: [...res] })
            })
    }

    increment = () => {
        this.setState({ number: this.state.number + 1 })

    }

    componentDidUpdate() {
        console.log('In component did update : ', this.state.number);
    }

    toggleComponent = () => {
        this.setState({ number: this.state.number ? 0 : 1 })
    }

    render() {
        return (
            <div>
                <h1>Life Cycle Methods!!!</h1>
                <p>Number : {this.state.number}</p>
                <button type='button' onClick={this.increment}>Add</button>

                <ul>
                    {this.state.userList.map((user) => (
                        <li>{user.username}</li>
                    ))}
                </ul>
                <button type='button' onClick={this.toggleComponent}>Toggle</button>
            </div>
        )
    }
}

export default LifeCycleMethodsDemo;