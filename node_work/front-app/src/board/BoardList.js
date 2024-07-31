import { useEffect, useState } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

export default function BoardList() {
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const p_page = search.get('page');
  const page = p_page === null ? 1 : Number(p_page);
  let [boards, setBoards] = useState([]);
  let [lastPage, setLastPage] = useState([]);
  function board() {
    axios.get('http://localhost:80/board?page=' + page).then((result) => {
      console.log(result);
      setBoards([...result.data.list]);
      setLastPage(Math.ceil(result.data.total.cnt / 10));
    });
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
                  <NavLink to={`/list/${ele.board_id}`}>{ele.title}</NavLink>
                </td>
                <td>{ele.content}</td>
                <td>{ele.wdt}</td>
                <td>{ele.writer}</td>
              </tr>
            );
          })}
        </tbody>
        {[...Array(lastPage)].map((ele, idx) => (
          <NavLink to={`http://localhost:3000/list?page=${idx + 1}`}>{idx + 1}</NavLink>
        ))}
      </Table>
    </>
  );
}
