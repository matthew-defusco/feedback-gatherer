import { configureStore } from "@reduxjs/toolkit";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: reduxForm,
  },
});
