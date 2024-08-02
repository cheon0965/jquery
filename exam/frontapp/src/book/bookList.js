import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import pageDTO from './book/pageDTO';
import { Table, Pagination } from 'react-bootstrap';

function App() {
  // url param 값 획득
  const navigater = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.serch);

  // param page 값 획득
  const paramPage = search.get('page');

  const page = paramPage === null ? 1 : Number(paramPage);

  // bookLiast 저장 lastPage 저장
  let [books, setBooks] = useState([]);
  let [lastPage, setLastPage] = useState([]);

  // 현제 페이지 리스트 저장 & 전체 리스트 길이 저장
  function getBook() {
    axios.get('/api/book?page=' + page).then((result) => {
      setBooks([...result.data.list]);
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
          navigater(`/api/book?page=${DTO.startPage - 1}`);
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
          navigater(`/api/book?page=${number}`);
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
          navigater(`/api/book?page=${DTO.endPage + 1}`);
        }}
      />
    );
  }
  // page 변경시 다시실행
  useEffect(() => {
    getBook();
  }, [page]);

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작가</th>
            <th>출판사</th>
            <th>출판일</th>
            <th>정보</th>
          </tr>
        </thead>
        <tbody>
          {books.map((ele) => {
            return (
              <tr key={ele.no}>
                <td>{ele.no}</td>
                <td>
                  <NavLink to={`/book/list/${ele.no}`}>{ele.name}</NavLink>
                </td>
                <td>{ele.writer}</td>
                <td>{ele.publisher}</td>
                <td>{ele.publication_date}</td>
                <td>{ele.info}</td>
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
