import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authState: null,
  },
  reducers: {
    defaultState: (state) => {
      return state;
    },
    anotherActionType: (state, action) => {
      return (state += action.payload);
    },
  },
});

// export const authReducer = (state = {}, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

export const { defaultState, anotherActionType } = authSlice.actions;

export default authSlice.reducer;
