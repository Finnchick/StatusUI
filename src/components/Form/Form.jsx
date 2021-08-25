import { addEmpoyee } from '../../api/apiInterface';
import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState(null);
  const [status, setStatus] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    addEmpoyee(name, status);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' onChange={handleNameChange} />
        <input type='text' name='status' onChange={handleStatusChange} />
        <input type='submit' value='send' />
      </form>
    </div>
  );
};

export default Form;
