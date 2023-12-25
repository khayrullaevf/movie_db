import { configureStore } from "@reduxjs/toolkit";

import fetchDataReducer from "../slice/fetchData";

const store = configureStore({
  reducer: {
    data: fetchDataReducer,
  },
});

export default store;
