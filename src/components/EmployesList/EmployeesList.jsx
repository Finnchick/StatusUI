import React, { useEffect, useState } from 'react';

import { addEmployee, getEmployees } from '../../api/apiInterface';
import EmployeesStatus from '../EmployesStatus/EmployeesStatus';
import './style.sass';

export const EmployeesList = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState(null);
  const [status, setStatus] = useState(null);
  const [lastName, setLastName] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEmployee(name, lastName, status.toUpperCase()).then((res) => {
      let newEmployees = [...data, res.data];
      setData(newEmployees);
    });
  };

  useEffect(() => {
    if (data.length === 0) {
      getEmployees().then((results) => setData(results.data), []);
    }
  });

  return (
    <div className='app-wrapper'>
      <form className='add-new-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='First name'
          onChange={handleNameChange}
          required='true'
        />
        <input
          type='text'
          name='surname'
          placeholder='Second name'
          onChange={handleLastNameChange}
          required='true'
        />
        <input
          type='text'
          name='status'
          placeholder='Status'
          onChange={handleStatusChange}
          required='true'
        />
        <input className='submit' type='submit' value='send' />
      </form>

      {data
        ? data.map((item) => {
            const { lastName, firstName, id, status: activeStatus } = item;

            return (
              <EmployeesStatus
                key={id}
                id={id}
                firstName={firstName}
                lastName={lastName}
                activeStatus={activeStatus}
              />
            );
          })
        : 'wait'}
    </div>
  );
};
