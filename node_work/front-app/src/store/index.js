import { configureStore, createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { count: 0 },
  reducers: {
    up: (state, action) => {
      //   state.count += action.ic;

      // dispatch(counterSlice.actions.up(2)); 사용시
      state.count += action.payload;
    },
    down: (state, action) => {
      state.count -= action.ic;
    },
  },
});

export const logInSlice = createSlice({
  name: 'logIn',
  initialState: { userName: '홍길동', email: 'hong@a.com' },
  reducers: {
    setName: (state, action) => {
      state.userName = action.userName;
    },
    setEmail: (state, action) => {
      state.email = action.email;
    },
  },
});

export const store = configureStore({ reducer: { counter: counterSlice.reducer, logIn: logInSlice.reducer } });
