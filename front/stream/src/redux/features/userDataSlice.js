import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: "",
  test: "echo",
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData } = userDataSlice.actions;

export default userDataSlice.reducer;
