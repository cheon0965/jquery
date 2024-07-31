import { Routes, Route, NavLink } from 'react-router-dom';
import BoardList from './BoardList';
import BoardUpdate from './BoardUpdate';
import BoardInsert from './BoardInsert';
import Container from 'react-bootstrap/Container';
import { Row, Col, Nav } from 'react-bootstrap';
import BoardInfo from './BoardInfo';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BoardComponent() {
  return (
    <Container>
      <Nav activeKey="/list" as="ul">
        <Nav.Item as="li">
          <Nav.Link>
            <NavLink to="/list">게시판</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link>
            <NavLink to="/insert">글쓰기</NavLink>
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
