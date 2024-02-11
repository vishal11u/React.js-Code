import React from 'react'

class LifeCycleMethods extends React.Component{

    constructor(){
        super()
        this.state={
            number:0,
            userList:[]
        }
    }

    componentDidMount(){
        console.log('In component did mount');
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(res=>{
            console.log(res);   
        })
    }

    increment=()=>{
        this.setState({number:this.state.number+1})
    }

    componentDidUpdate(){
        console.log('In component did update : ',this.state.number);
    }

    render(){
        return(
            <div>
                <h1>Life Cycle Methods!!!</h1>
                <p>Number : {this.state.number}</p>
                <button type='button' onClick={this.increment}>Add</button>
            </div>
        )
    }
}

export default LifeCycleMethods




