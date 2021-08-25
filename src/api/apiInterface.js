import axios from 'axios';

const url = 'https://61250c542390b700175faac4.mockapi.io/employees/';

export async function getEmployes() {
  return await axios.get(url);
}

export function addEmpoyee(firstName, status) {
  axios
    .post(url, {
      firstName,
      status,
    })
    .then((result) => console.log(result));
}

export function changeEmloyeeStatus(id, status) {
  console.log(`${url} + ${id}`);
  axios.put(`${url}/${id}`, { status });
}
