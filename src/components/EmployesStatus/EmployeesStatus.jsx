import { changeEmloyeeStatus } from '../../api/apiInterface';
import { useState } from 'react';

import './style.sass';
const EmployeesStatus = ({ firstName, lastName, id, activeStatus }) => {
  const [activeStatusName, setActiveStatusName] = useState(activeStatus);

  const handleClick = (e, id, item) => {
    console.log(e, id, item);
    changeEmloyeeStatus(id, item);
    setActiveStatusName(item);
  };

  const STATES = {
    ADDED: 'ADDED',
    IN_CHECK: 'IN-CHECK',
    APPROVED: 'APPROVED',
    ACTIVE: 'ACTIVE',
    INACTIVE: 'INACTIVE',
  };

  return (
    <div>
      <div className='employee-line'>
        {firstName} {lastName}
        <div className='button-container'>
          <button
            className={activeStatusName === STATES.ADDED ? 'btn-active' : 'btn'}
            onClick={(event) => {
              handleClick(event, id, STATES.ADDED);
            }}
          >
            {STATES.ADDED}
          </button>
          <button
            className={
              activeStatusName === STATES.IN_CHECK ? 'btn-active' : 'btn'
            }
            onClick={(event) => {
              handleClick(event, id, STATES.IN_CHECK);
            }}
          >
            {STATES.IN_CHECK}
          </button>
          <button
            className={
              activeStatusName === STATES.APPROVED ? 'btn-active' : 'btn'
            }
            onClick={(event) => {
              handleClick(event, id, STATES.APPROVED);
            }}
          >
            {STATES.APPROVED}
          </button>
          <button
            className={
              activeStatusName === STATES.ACTIVE ? 'btn-active' : 'btn'
            }
            onClick={(event) => {
              handleClick(event, id, STATES.ACTIVE);
            }}
          >
            {STATES.ACTIVE}
          </button>
          <button
            className={
              activeStatusName === STATES.INACTIVE ? 'btn-active' : 'btn'
            }
            onClick={(event) => {
              handleClick(event, id, STATES.INACTIVE);
            }}
          >
            {STATES.INACTIVE}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeesStatus;
