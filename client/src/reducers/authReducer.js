import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const testThunk = createAsyncThunk('test', () => {
//   // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   // const data = await res.json();
//   // return data;
//   return fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) =>
//     res.json()
//   );
// });

// export const testVanillaThunk = () => async (dispatch) => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await response.json();

//   dispatch(returnPost(data));
// };

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authState: null,
  },
  reducers: {
    returnAuth: (state, action) => {
      return state.authState;
    },
  },
  // extraReducers: {
  //   [testThunk.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [testThunk.fulfilled]: (state, { payload }) => {
  //     state.isLoading = false;
  //     state.posts = payload;
  //   },
  // },
});

export const { returnAuth } = authSlice.actions;

export default authSlice.reducer;
