import React from "react"

class ClassDemo extends React.Component{

    constructor(){
        super()   // call to constructor of super class
        this.state={
            "firstName":''
        }
    
    }

    handleChange=(event)=>{
        this.setState({firstName:event.target.value})
    }

    render(){
        return(
            <div>
                   <h1>Class Component</h1>
                    <input type="text" onChange={this.handleChange}/>
                    <p>FirstName : {this.state.firstName}</p>
            </div>        
        )
    }
}

export default ClassDemo