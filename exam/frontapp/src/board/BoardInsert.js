import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function BoardInsert() {
  const navigater = useNavigate();
  let { no } = useParams();

  let [board, setBoard] = useState({ TITLE: '', CONTENT: '', WRITER: '', CREATED_DATE: getDate() });

  function getDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');

    const dateString = year + '-' + month + '-' + day;
    return dateString;
  }
  let changeBoard = (e) => {
    setBoard({ ...board, [e.target.placeholder]: e.target.value });
  };

  let hendlerSave;
  let boardInfo;
  if (no == '' || no == null) {
    hendlerSave = () => {
      //ajax 등록 처리
      axios.post('/api/board', [board]).then((result) => {
        if (result.data[0].affectedRows == 1) {
          let insertId = result.data[0].insertId;
          //목록 이동 (useNavigate)
          navigater('/Board/update/' + insertId);
        } else {
          alert('등록오류');
        }
      });
    };
  } else {
    boardInfo = () => {
      axios.get(`/api/board/${no}`).then((result) => {
        setBoard({ ...result.data[0] });
      });
    };

    hendlerSave = () => {
      //ajax 등록 처리
      axios
        .put(`/api/board/${no}`, {
          NO: board.NO,
          TITLE: board.TITLE,
          CONTENT: board.WRITER,
          WRITER: board.WRITER,
          UPDATED_DATE: getDate(),
        })
        .then((result) => {
          navigater('/Board');
        });
    };
  }

  useEffect(() => {
    if (no != '' && no != null) {
      boardInfo();
    }
  }, [no]);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="NO">
        <Form.Label>NO.</Form.Label>
        <Form.Control type="text" placeholder="NO" value={board.NO} disabled />
      </Form.Group>

      <Form.Group className="mb-3" controlId="TITLE">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="TITLE" value={board.TITLE} onChange={changeBoard} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="WRITER">
        <Form.Label>작성자</Form.Label>
        <Form.Control type="text" placeholder="WRITER" value={board.WRITER} onChange={changeBoard} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="CONTENT">
        <Form.Label>내용</Form.Label>
        <Form.Control type="text" placeholder="CONTENT" value={board.CONTENT} onChange={changeBoard} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="CONTENT">
        <Form.Label>작성일자</Form.Label>
        <Form.Control type="date" placeholder="CONTENT" value={board.CREATED_DATE} onChange={changeBoard} />
      </Form.Group>

      <ButtonGroup>
        <Button variant="primary" type="button" onClick={hendlerSave}>
          저장
        </Button>

        <Button
          variant="secondary"
          type="button"
          onClick={() => {
            setBoard({ NO: '', TITLE: '', CONTENT: '', WRITER: '' });
          }}
        >
          리셋
        </Button>
      </ButtonGroup>
    </Form>
  );
}
