import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function BoardInfo() {
  const navigater = useNavigate();
  let { board_id } = useParams();
  let [board, setBoard] = useState({});
  function boardInfo() {
    axios.get(`http://localhost:80/board/${board_id}`).then((result) => {
      setBoard({ ...result.data[0] });
    });
  }
  let hendlerDelete = () => {
    let real = window.confirm('정말 삭제하시겠습니까?');
    if (real) {
      axios.delete(`http://localhost:80/board/${board_id}`).then((result) => {
        navigater('/list');
      });
    }
  };

  useEffect(() => {
    boardInfo();
  }, [board_id]);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>content</th>
          <th>wdt</th>
          <th>writer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{board.board_id}</td>
          <td>{board.title}</td>
          <td>{board.content}</td>
          <td>{board.wdt}</td>
          <td>{board.writer}</td>
        </tr>
      </tbody>
      <ButtonGroup aria-label="Basic example">
        <Button
          onClick={() => {
            navigater(`/update/${board_id}`);
          }}
        >
          수정
        </Button>{' '}
        <Button onClick={hendlerDelete} variant="warning">
          삭제
        </Button>
      </ButtonGroup>
    </Table>
  );
}
