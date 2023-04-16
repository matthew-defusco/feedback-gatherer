import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const testVanillaThunk = () => async (dispatch) => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const data = await response.json();

//   dispatch(returnPost(data));
// };

export const getUser = createAsyncThunk("getUser", async () => {
  const response = await axios.get("/api/current_user");
  return response.data;
});

export const handleToken = createAsyncThunk("handleToken", async (token) => {
  const response = await axios.post("/api/stripe", token);
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });

    builder.addCase(handleToken.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(handleToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
  },
});

export const actions = authSlice.actions;

export default authSlice.reducer;
