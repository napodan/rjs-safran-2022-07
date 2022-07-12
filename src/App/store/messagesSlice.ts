import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import IMessage from "../interfaces/IMessage";

export interface IMessagesStoreState {
  values: Array<IMessage>;
  httpstatus: "idle" | "pending" | "failed";
}
const initialState: IMessagesStoreState = {
  httpstatus: "idle",
  values: [
    { id: 0, text: "Hello", from: 0, dt: new Date().toString() },
    { id: 1, text: "de lu", from: 1, dt: new Date().toString() },
    { id: 2, text: "Comment", from: 0, dt: new Date().toString() },
    { id: 3, text: "ca", from: 1, to: 0, dt: new Date().toString() },
    { id: 4, text: "va", from: 0, dt: new Date().toString() },
  ],
};

const messagesSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    add: (state: IMessagesStoreState, action: PayloadAction<IMessage>) => {
      state.values.push(action.payload);
    },
    load: (
      state: IMessagesStoreState,
      action: PayloadAction<Array<IMessage>>
    ) => {
      state.values = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      initialLoadMessage.pending,
      (state: IMessagesStoreState, action: PayloadAction) => {
        state.httpstatus = "pending";
      }
    );
    builder.addCase(
      initialLoadMessage.fulfilled,
      (state: IMessagesStoreState, action: PayloadAction<Array<IMessage>>) => {
        state.httpstatus = "idle";
        state.values=action.payload;
      }
    );
    builder.addCase(
      initialLoadMessage.rejected,
      (state: IMessagesStoreState) => {
        state.httpstatus = "failed";
      }
    );
  },
});

export const initialLoadMessage = createAsyncThunk("messages/nethydrate", async () => {
  return (await fetch("http://localhost:5679/messages")).json();
});

export const { add, load } = messagesSlice.actions;

export default messagesSlice.reducer;
