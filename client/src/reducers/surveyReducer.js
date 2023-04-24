import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSurveys = createAsyncThunk("getSurveys", async () => {
  const response = await axios.get("/api/surveys");
  return response.data;
});

const surveySlice = createSlice({
  name: "survey",
  initialState: {
    surveys: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSurveys.fulfilled, (state, action) => {
      state.surveys = action.payload;
      state.isLoading = false;
    });

    builder.addCase(getSurveys.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const actions = surveySlice.actions;

export default surveySlice.reducer;
