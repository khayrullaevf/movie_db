import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


 const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmRjOTcxNTRkYWM1NjUxMmY2Mjc1YzEzMjg5ZDM1MiIsInN1YiI6IjY1ODk3YjBiNDc3MjE1NDY4ODQzMzUxNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Cp92oRdQd8MgTg82BkC0dSCBdSjc1fMQrMNBLrQHjxk",
    },
  };



export const fetchData = createAsyncThunk("fetchData", async(url) => {
  try {
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
});

const getDataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    data: null,
    error: false,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default getDataSlice.reducer;
