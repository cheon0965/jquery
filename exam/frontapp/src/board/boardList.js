import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import pageDTO from './pageDTO';
import { Table, Pagination } from 'react-bootstrap';

function App() {
  // url param 값 획득
  const navigater = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.serch);

  // param page 값 획득
  const paramPage = search.get('page');

  const page = paramPage === null ? 1 : Number(paramPage);

  // boardLiast 저장 lastPage 저장
  let [board, setboard] = useState([]);
  let [lastPage, setLastPage] = useState([]);

  // 현제 페이지 리스트 저장 & 전체 리스트 길이 저장
  function getboard() {
    axios.get('/api/board?page=' + page).then((result) => {
      setboard([...result.data.list]);
      setLastPage(Math.ceil(result.data.total.cnt));
    });
  }

  // 페이징 버튼 생성
  // 이전버튼 생성
  let DTO = pageDTO(page, lastPage);
  let active = page;
  let items = [];
  if (DTO.prev) {
    items.push(
      <Pagination.Prev
        onClick={() => {
          navigater(`/board?page=${DTO.startPage - 1}`);
        }}
      />
    );
  }
  // 번호버튼 생성
  for (let number = DTO.startPage; number <= DTO.endPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          navigater(`/board?page=${number}`);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  // 이후버튼 생성
  if (DTO.next) {
    items.push(
      <Pagination.Next
        onClick={() => {
          navigater(`/board?page=${DTO.endPage + 1}`);
        }}
      />
    );
  }
  // page 변경시 다시실행
  useEffect(() => {
    getboard();
  }, [page]);

  return (
    <>
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
          {board.map((ele) => {
            return (
              <tr key={ele.NO}>
                <td>{ele.NO}</td>
                <td>
                  <NavLink to={`/board/${ele.NO}`}>{ele.TITLE}</NavLink>
                </td>
                <td>{ele.WRITER}</td>
                <td>{ele.CREATED_DATE}</td>
                <td>{ele.CREATED_DATE}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center">
        <Pagination className="text-center">{items}</Pagination>
      </div>
    </>
  );
}

export default App;
