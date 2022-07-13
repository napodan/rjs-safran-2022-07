import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../interfaces/IUsers";
export interface IUsersStoreState {
  values: Array<IUser>;
  selectedUserId: number | undefined;
}

const initialState: IUsersStoreState = {
  values: [],
  selectedUserId: undefined,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    selectUser: (
      state: IUsersStoreState,
      action: PayloadAction<number | undefined>
    ) => {
      state.selectedUserId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      loadInitialUsers.fulfilled,
      (state, action: PayloadAction<Array<IUser>>) => {state.values=action.payload}
    );
  },
});
export const loadInitialUsers = createAsyncThunk("users/nethydrate", async () =>
  (await fetch("http://localhost:5679/users")).json()
);
export const { selectUser } = usersSlice.actions;

export default usersSlice.reducer;
