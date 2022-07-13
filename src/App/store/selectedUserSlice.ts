import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number | null = null as number | null;
const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState,
  reducers: {
    selectUser: (_, action: PayloadAction<number | null>) => action.payload,
  },
});

export const { selectUser } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
