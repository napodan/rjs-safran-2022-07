import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../interfaces/IUsers";
export interface IUsersStoreState {
  values: Array<IUser>;
  selectedUserId: number | undefined;
  wsConnectionState: "close" | "open" | "waitForResponse";
}

const initialState: IUsersStoreState = {
  values: [],
  selectedUserId: undefined,
  wsConnectionState: "close",
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    opened: (state: IUsersStoreState, action: PayloadAction<undefined>) => {
      state.wsConnectionState = "open";
    },
    closed: (
      state: IUsersStoreState,
      action: PayloadAction<number | undefined>
    ) => {
      state.wsConnectionState = "close";
    },
    close: (state: IUsersStoreState, action: PayloadAction<WebSocket>) => {
      action.payload.close();
    },
    requestAllUsers: (
      state: IUsersStoreState,
      action: PayloadAction<WebSocket>
    ) => {
      action.payload.send(JSON.stringify({ type: "read", path: "users" }));
    },
    wsUpdateValues: (
      state: IUsersStoreState,
      action: PayloadAction<Array<IUser>>
    ) => {
      state.values = action.payload;
    },
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
      (state, action: PayloadAction<Array<IUser>>) => {
        state.values = action.payload;
      }
    );
  },
});
export const loadInitialUsers = createAsyncThunk("users/nethydrate", async () =>
  (await fetch("http://localhost:5679/users")).json()
);
export const {
  opened,
  close,
  closed,
  requestAllUsers,
  wsUpdateValues,
  selectUser,
} = usersSlice.actions;

export default usersSlice.reducer;
