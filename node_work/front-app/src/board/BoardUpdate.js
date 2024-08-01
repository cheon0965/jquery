import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function BoardUpdate() {
  const navigater = useNavigate();
  let { board_id } = useParams();
  let [board, setBoard] = useState({ board_id: '', title: '', content: '', wdt: '', writer: '' });
  function boardInfo() {
    axios.get(`http://localhost:80/board/${board_id}`).then((result) => {
      setBoard({ ...result.data[0] });
    });
  }

  let changeBoard = (e) => {
    setBoard({ ...board, [e.target.placeholder]: e.target.value });
  };

  const hendlerSave = () => {
    //ajax 등록 처리
    axios
      .put(`http://localhost:80/board/${board_id}`, {
        board_id: board.board_id,
        title: board.title,
        content: board.content,
        writer: board.writer,
      })
      .then((result) => {
        console.log(board);

        navigater('/Board/list');
      });
  };

  useEffect(() => {
    boardInfo();
  }, [board_id]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>글번호</Form.Label>
        <Form.Control type="text" placeholder="board_id" value={board.board_id} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="title">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="title" value={board.title} onChange={changeBoard} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>작성시간</Form.Label>
        <Form.Control type="text" placeholder="wdt" value={board.wdt} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>내용</Form.Label>
        <Form.Control type="text" placeholder="content" value={board.content} onChange={changeBoard} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="writer">
        <Form.Label>작성자</Form.Label>
        <Form.Control type="text" placeholder="writer" value={board.writer} onChange={changeBoard} />
      </Form.Group>
      <Button onClick={hendlerSave}>저장</Button>
    </Form>
  );
}
