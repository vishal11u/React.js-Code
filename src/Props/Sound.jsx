import React from 'react'

function Sound() {

    const handleClick=()=>{
        const text="opar  ppaan  kie  dukan  nieche raandi ka makan raandi deneko tayar chachha bosadika , chachha bosadika "
        const value = new SpeechSynthesisUtterance (text);
        window.speechSynthesis.speak(value)
    }


  return (
    <div className='text-center mt-8'>
        <button onClick={handleClick} className=' bg-yellow-400 text-white py-3 px-5 rounded-lg'>Himmat hai to daba</button>
    </div>
  )
}

export default Sound