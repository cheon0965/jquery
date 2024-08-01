import { legacy_createStore as createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, counterSlice, logInSlice } from './store';
import { useState } from 'react';

// dispatch시 동작할 함수
/*
function reducer(state, action) {
  if (action.type == 'up') {
    return { ...state, count: state.count + action.ic };
  }
  return state;
}

// store 객체 생성
const initialState = { count: 0 };
const store = createStore(reducer, initialState);
*/

// button 객체 생성
// dispatch 로 동작
// useSelector 값불러오기

function MyPage() {
  const dispatch = useDispatch();
  const userName = useSelector((state) => {
    return state.logIn.userName;
  });
  const email = useSelector((state) => {
    return state.logIn.email;
  });
  let [user, setUser] = useState({ userName, email });

  return (
    <div>
      <input
        value={user.userName}
        onChange={(e) => {
          setUser({ ...user, userName: e.target.value });
        }}
      ></input>
      <input
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      ></input>{' '}
      <button
        onClick={() => {
          dispatch(logInSlice.actions.setName(user.userName));
          dispatch(logInSlice.actions.setEmail(user.email));
        }}
      >
        로그인
      </button>
    </div>
  );
}

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    // return state.count;

    return state.counter.count;
  });

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: 'counterSlice/down', ic: 2 });
        }}
      >
        -
      </button>{' '}
      {count}{' '}
      <button
        onClick={() => {
          //   dispatch({ type: 'up', ic: 2 });
          //   dispatch({ type: 'counterSlice/up', ic: 2 });
          dispatch(counterSlice.actions.up(2));
        }}
      >
        +
      </button>
    </div>
  );
}

// provider을 통하여 할당
export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter></Counter>
        <MyPage></MyPage>
      </Provider>
    </div>
  );
}
