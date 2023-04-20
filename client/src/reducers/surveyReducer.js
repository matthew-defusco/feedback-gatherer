import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const submitSurvey = createAsyncThunk("submitSurvey", async (values) => {
  const response = await axios.post("/api/surveys", values);
  return response.data;
});

const surveySlice = createSlice({
  name: "survey",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(submitSurvey.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const actions = surveySlice.actions;

export default surveySlice.reducer;
