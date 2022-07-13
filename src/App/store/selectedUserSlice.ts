import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = 0;
const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState,
  reducers: {
    selectUser: (_, action: PayloadAction<number>) => action.payload,
  },
});

export const { selectUser } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
