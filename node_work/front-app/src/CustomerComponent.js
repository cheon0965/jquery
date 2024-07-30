import { useState } from 'react';
import CustomerList from './CustomerList';
import CustomerUpdate from './CustomerUpdate';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomerComponent() {
  let [id, setId] = useState(2);

  function changeId(id) {
    setId(id);
  }

  return (
    <Container>
      <Row>
        <Col>
          <CustomerList changeId={changeId} />
        </Col>
        <Col>
          <CustomerUpdate id={id} />
        </Col>
      </Row>
    </Container>
  );
}
