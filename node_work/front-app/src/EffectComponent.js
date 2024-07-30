import { useEffect, useState } from 'react';

function Todo({ todos }) {
  return todos.map((ele) => {
    return (
      <tr key={ele.id}>
        <td>{ele.id}</td>
        <td>{ele.userId}</td>
        <td>{ele.title}</td>
      </tr>
    );
  });
}

export default function EffectComponent() {
  let [count, setCount] = useState(1);
  let [todos, setTodos] = useState([]);

  function callAPI() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setTodos([...json]);
      });
  }

  // 랜더링후에 한번만 실행
  useEffect(() => {
    // callAPI();
    console.log('useEffect');
    return () => {
      console.log('clean up');
    };
  }, [count]); // [] 안에는 변하면 다시 실행할 값을 넣는다.

  return (
    <>
      <h1>side effect(부수효과)</h1>
      <div onClick={() => setCount(count + 1)}>{count}</div>
      <table>
        <tbody>
          <tr>
            <th>id</th>
            <th>userId</th>
            <th>title</th>
          </tr>
          <Todo todos={todos} />
        </tbody>
      </table>
    </>
  );
}
