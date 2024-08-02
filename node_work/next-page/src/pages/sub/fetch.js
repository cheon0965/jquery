import { useEffect, useState } from 'react';

export default function Fetch() {
  const [todo, setTodo] = useState([]);
  let url = process.env.NEXT_PUBLIC_TODO_URL;

  function callAPI() {
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setTodo(result);
      });
  }

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div>
      <h1>sub폴더 Fetch</h1>
      <a href="/">/pages/index.js</a>
      <table>
        <tbody>
          {todo.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
