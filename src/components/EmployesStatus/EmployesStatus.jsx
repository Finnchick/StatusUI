import './style.sass';
const EmployesStatus = ({ firstName, lastName }) => {
  const statusNames = ['ADDED', 'IN-CHECK', 'APPROVED', 'ACTIVE', 'INACTIVE'];

  return (
    <div>
      <div className='employee-line'>
        {firstName} {lastName}
        <div>
          {statusNames.map((item) => {
            return (
              <button className='btn' key={statusNames.indexOf(item)}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EmployesStatus;
