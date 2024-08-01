import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, NavLink, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import pageDTO from './pageDTO';

export default function BoardList() {
  const navigater = useNavigate();
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const p_page = search.get('page');
  const page = p_page === null ? 1 : Number(p_page);
  let [boards, setBoards] = useState([]);
  let [lastPage, setLastPage] = useState([]);
  function board() {
    axios.get('http://localhost:80/board?page=' + page).then((result) => {
      setBoards([...result.data.list]);
      setLastPage(Math.ceil(result.data.total.cnt));
    });
  }
  let DTO = pageDTO(page, lastPage);
  let active = page;
  let items = [];
  if (DTO.prev) {
    items.push(
      <Pagination.Prev
        onClick={() => {
          navigater(`/Board/list?page=${DTO.startPage - 1}`);
        }}
      />
    );
  }
  for (let number = DTO.startPage; number <= DTO.endPage; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        <Link to={`/Board/list?page=${number}`}>{number}</Link>
      </Pagination.Item>
    );
  }
  if (DTO.next) {
    items.push(
      <Pagination.Next
        onClick={() => {
          navigater(`/Board/list?page=${DTO.endPage + 1}`);
        }}
      />
    );
  }

  useEffect(() => {
    board();
  }, [page]);

  return (
    <>
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
          {boards.map((ele) => {
            return (
              <tr key={ele.board_id}>
                <td>{ele.board_id}</td>
                <td>
                  <NavLink to={`/Board/list/${ele.board_id}`}>{ele.title}</NavLink>
                </td>
                <td>{ele.content}</td>
                <td>{ele.wdt}</td>
                <td>{ele.writer}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>
        <Pagination>{items}</Pagination>
      </div>
    </>
  );
}
