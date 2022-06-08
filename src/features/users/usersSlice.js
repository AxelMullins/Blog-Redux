import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Axel Mullins" },
  { id: "2", name: "John Doe" },
  { id: "3", name: "Jane Doe" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, userId) =>
    state.users.find(user => user.id === userId)

export default usersSlice.reducer;
