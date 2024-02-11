import React, { Component } from 'react'

export default class DemoLifeCycle extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    };

    increase = () => {
        this.setState({ number: this.state.number + 1 })
    };

    decrease = () => {
        this.setState({ number: this.state.number - 1 })
    };

    render() {
        return (
            <div className='flex justify-center gap-2 mt-5'>
                <button className='border px-1 bg-gray-100' onClick={this.decrease} >-</button>
                <p className='border px-2'>Number: {this.state.number}</p>
                <button className='border px-1 bg-gray-100' onClick={this.increase} >+</button>
            </div>
        )
    }
};

