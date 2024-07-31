import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function BoardInsert() {
  const navigater = useNavigate();
  let [board, setBoard] = useState({ title: '', content: '', writer: '' });

  let changeBoard = (e) => {
    setBoard({ ...board, [e.target.placeholder]: e.target.value });
  };

  const hendlerSave = () => {
    //ajax 등록 처리
    axios.post('http://localhost:80/board', [board]).then((result) => {
      if (result.data[0].affectedRows == 1) {
        //목록 이동 (useNavigate)
        navigater('/list');
      } else {
        alert('등록오류');
      }
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="title" value={board.title} onChange={changeBoard} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="content">
        <Form.Label>내용</Form.Label>
        <Form.Control type="text" placeholder="content" value={board.content} onChange={changeBoard} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="writer">
        <Form.Label>작성자</Form.Label>
        <Form.Control type="text" placeholder="writer" value={board.writer} onChange={changeBoard} />
      </Form.Group>
      <ButtonGroup>
        <Button variant="primary" type="button" onClick={hendlerSave}>
          저장
        </Button>

        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            setBoard({ title: '', content: '', writer: '' });
          }}
        >
          리셋
        </Button>
      </ButtonGroup>
    </Form>
  );
}
