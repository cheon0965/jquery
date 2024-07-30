import { useEffect, useState } from 'react';
export default function CustomerList({ changeId }) {
  let [customers, setCustomers] = useState([]);
  function customer() {
    fetch('http://localhost:80/customer3')
      .then((response) => response.json())
      .then((json) => {
        setCustomers([...json]);
      });
  }
  useEffect(() => {
    customer();
  }, []);
  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
          <th>phone</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((ele) => {
          return (
            <tr
              key={ele.id}
              onClick={() => {
                changeId(ele.id);
              }}
            >
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td>{ele.phone}</td>
              <td>{ele.address}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
