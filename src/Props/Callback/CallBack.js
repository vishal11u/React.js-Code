import React from 'react';

function CallBAck() {
  const [message, setMessage] = React.useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <h1>Callback Event</h1>
      <ChildComponent handleInput={handleChange} />
      <p>Message: {message}</p>
    </div>
  );
}

function ChildComponent({ handleInput }) {
  return (
    <div>
      <h2>Child Component</h2>
      <input type='text' onChange={handleInput}></input>
    </div>
  );
}

export default CallBAck;
