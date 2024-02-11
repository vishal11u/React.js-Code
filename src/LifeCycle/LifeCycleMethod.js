import React, { Component } from 'react'
import ComponentTwo from './ComponentTwo';
import ComponentOne from './ComponentOne';

class LifeCycleMethod extends Component {
    constructor() {
        super()
        this.state = {
            number: 0
        }
    }

    // When render the page then first merhod will run is (ComponentDidMount). It run always when page will render. //
    componentDidMount() { //when page render then run componentdidmount first
        console.log("DidMount");
    }

    //when we change the state then componentdidupdate are exicuted/run. everytime state will change
    componentDidUpdate() {
        console.log("Update :", this.state.number);
    }

    increase = () => {
        this.setState({ number: this.state.number + 1 })
    }

    render() { //when we use class then always use "this."//
        const component =this.state.number ? <ComponentOne/> : <ComponentTwo/>;

        return (
            <div className='text-center mt-12'>
                <h1 className=''>Life Cycle Methods</h1>
                <p>This is Class component !!!!</p>
                <p>Increase: {this.state.number}</p>
                <button className='border px-1' onClick={this.increase}>+</button>
                {component}
            </div>
        )
    }
}
export default LifeCycleMethod;
