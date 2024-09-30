import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  role: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      loginUser: (state, action) => {
        state.isAuthenticated = true;
        state.role = action.payload.role;
      },
      logoutUser: (state) => {
        state.isAuthenticated = false;
        state.role = null;
      },
    },
  });
  
  export const { loginUser, logoutUser } = authSlice.actions;
  export default authSlice.reducer;
  
