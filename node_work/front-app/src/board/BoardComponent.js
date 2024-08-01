import { Routes, Route, NavLink } from 'react-router-dom';
import BoardList from './BoardList';
import BoardUpdate from './BoardUpdate';
import BoardInsert from './BoardInsert';
import Container from 'react-bootstrap/Container';
import { Row, Col, Nav } from 'react-bootstrap';
import BoardInfo from './BoardInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext } from 'react';
import { logInContext } from '../context';

export default function BoardComponent() {
  let logId = useContext(logInContext);
  return (
    <Container>
      <h3>로그인: {logId.userid}</h3>
      <Nav activeKey="/Board/list" as="ul">
        <Nav.Item as="li">
          <Nav.Link>
            <NavLink to="/Board/list">게시판</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <NavLink to="/Board/insert">글쓰기</NavLink>
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Row>
        <Col>
          <Routes xs={10}>
            <Route path="/list" element={<BoardList />}></Route>
            <Route path="/update/:board_id" element={<BoardUpdate />}></Route>
            <Route path="/insert" element={<BoardInsert />}></Route>
            <Route path="/list/:board_id" element={<BoardInfo />}></Route>
            <Route path="/*" element={'Not Found'}></Route>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}
