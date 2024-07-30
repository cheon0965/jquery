import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function CustomerUpdate({ id }) {
  let [customerId, setCustomerId] = useState([]);

  function selectCustomerId() {
    if (id == null) {
      return;
    }
    fetch('http://localhost:80/customer3/' + id)
      .then((response) => response.json())
      .then((json) => {
        setCustomerId(json[0]);
      });
  }

  useEffect(() => {
    selectCustomerId();
  }, [id]);

  return (
    <form>
      <p>
        <Button type="reset" variant="info">
          초기화
        </Button>{' '}
        <Button variant="success">등록</Button> <Button variant="warning">삭제</Button>
      </p>
      <p>
        id: <input name="id" placeholder="id" value={customerId.id}></input>
      </p>
      <p>
        name: <input name="name" placeholder="name" value={customerId.name}></input>
      </p>
      <p>
        email: <input name="email" placeholder="email" value={customerId.email}></input>
      </p>
      <p>
        phone: <input name="phone" placeholder="phone" value={customerId.phone}></input>
      </p>
      <p>
        address: <input name="address" placeholder="address" value={customerId.address}></input>
      </p>
    </form>
  );
}
