import React, { useEffect, useState } from 'react';

import { getEmployes } from '../../api/apiInterface';
import EmployesStatus from '../EmployesStatus/EmployesStatus';
import Form from '../Form/Form';

export const EmployesList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      getEmployes().then((results) => setData(results.data), [data]);
    }
  });

  return (
    <div>
      <Form />
      {data
        ? data.map((item) => {
            const { lastName, firstName, id } = item;

            return (
              <EmployesStatus
                key={id}
                firstName={firstName}
                lastName={lastName}
              />
            );
          })
        : 'wait'}
    </div>
  );
};
