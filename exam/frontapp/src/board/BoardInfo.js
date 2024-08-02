import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function BoardInfo() {
  const navigater = useNavigate();
  let { no } = useParams();
  let [board, setBoard] = useState({});
  let [comment, setComment] = useState([]);

  function boardInfo() {
    axios.get(`/api/board/${no}`).then((result) => {
      setBoard({ ...result.data[0] });
      console.log(result);
      console.log(no);
    });
  }

  let hendlerDelete = () => {
    let real = window.confirm('정말 삭제하시겠습니까?');
    if (real) {
      axios.delete(`/api/board/${no}`).then((result) => {
        navigater('/Board');
      });
    }
  };

  useEffect(() => {
    boardInfo();
  }, [no]);

  return (
    <Table striped>
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{board.NO}</td>
          <td>{board.TITLE}</td>
          <td>{board.WRITER}</td>
          <td>{board.CREATED_DATE}</td>
          <td>{board.CREATED_DATE}</td>
        </tr>
      </tbody>
      <ButtonGroup aria-label="Basic example">
        <Button
          onClick={() => {
            navigater(`/Board/update/${no}`);
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
