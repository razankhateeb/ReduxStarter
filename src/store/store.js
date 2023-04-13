import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import taskReducer from "./tasks";
import employeeReducer from "./employees";
import logger from "redux-logger";
import error from "./middleware/error";
import api from "./middleware/api";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), api, error],
});
export default store;
