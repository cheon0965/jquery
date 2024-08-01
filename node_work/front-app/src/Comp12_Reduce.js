import { useReducer } from 'react';

function countReducer(oldCount, action) {
  if (action.type === 'UP') {
    return oldCount + action.number;
  } else if (action.type === 'DOWN') {
    return oldCount - action.number;
  } else if (action.type === 'RESET') {
    return action.number;
  }
}

export default function App() {
  let [count, dispatch] = useReducer(countReducer, 0);

  function down() {
    dispatch({ type: 'DOWN', number: 10 });
  }

  function reset() {
    dispatch({ type: 'RESET', number: 0 });
  }

  function up() {
    dispatch({ type: 'UP', number: 10 });
  }

  return (
    <div>
      <input type="button" value="-" onClick={down}></input>
      <input type="button" value="0" onClick={reset}></input>
      <input type="button" value="+" onClick={up}></input>
      <span>
        <p>{count}</p>
      </span>
    </div>
  );
}
