import React from 'react'

class ComponentTwo extends React.Component{

    componentWillUnmount(){
        console.log('Moye Moye , Moye Moye!!');
    }


    render(){
        return(
            <div>
                <h1>Component Two</h1>
                <p>This is Component Two!!!</p>
            </div>
        )
    }
}

export default ComponentTwo