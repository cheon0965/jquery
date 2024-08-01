import { legacy_createStore as createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

// 1. reducer
function reducer(currentState, action) {
  if (currentState === undefined) {
    return { number: 1 };
  }
  const newState = { ...currentState }; // 스테이트 불변법칙
  if (action.type == 'UP') {
    newState.number = newState.number + 1;
  } else if (action.type == 'DOWN') {
    newState.number = newState.number - 1;
  }
  return newState;
}
// 2. 스토어에 저장
const store = createStore(reducer, { number: 1 });

export default function App() {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store}>
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
}

function Left1(props) {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  );
}

function Left2(props) {
  const number = useSelector((state) => {
    return state.number;
  });
  return (
    <div>
      <h1>Left2 : {number}</h1>
      <Left3 />
    </div>
  );
}

function Left3(props) {
  return (
    <div>
      <h1>Left3</h1>
    </div>
  );
}

function Right1(props) {
  return (
    <div>
      <h1>Right1</h1>
      <Right2 />
    </div>
  );
}

function Right2(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right2</h1>
      <input
        type="button"
        value="-"
        onClick={() => {
          dispatch({ type: 'DOWN' });
        }}
      ></input>
      <Right3 />
    </div>
  );
}

function Right3(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Right3</h1>
      <input
        type="button"
        value="+"
        onClick={() => {
          dispatch({ type: 'UP' });
        }}
      ></input>
    </div>
  );
}
