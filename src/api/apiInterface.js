import axios from 'axios';

const url = 'https://61250c542390b700175faac4.mockapi.io/employees/';

export async function getEmployees() {
  return await axios.get(url);
}

export function addEmployee(firstName, lastName, status) {
  return axios.post(url, {
    firstName,
    lastName,
    status,
  });
}

export function changeEmloyeeStatus(id, status) {
  console.log('id' + id, 'status' + status);
  axios.put(`${url}/${id}`, { status });
}
