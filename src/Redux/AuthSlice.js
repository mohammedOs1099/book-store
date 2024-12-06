import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = { isLogedIn: false, name: "user name", id: uuidv4() };
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginOut: state => {
      state.isLogedIn = !state.isLogedIn;
    }
  }
});
export const { loginOut } = authSlice.actions;
export default authSlice.reducer;
