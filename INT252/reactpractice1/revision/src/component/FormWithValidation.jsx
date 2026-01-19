import React, { useState } from 'react';

const FormWithValidation=()=>{
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length < 3) {
      setError('Name must be at least 3 characters long');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length >= 3) {
      alert(`Submitted: ${name}`);
    } else {
      setError('Please fix errors before submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={handleChange} placeholder="Enter your name" />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
export default FormWithValidation;
