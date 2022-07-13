import { configureStore } from "@reduxjs/toolkit";
import messagesReducer, { initialLoadMessage } from "./messagesSlice";

const reducer = { messages: messagesReducer };
const store = configureStore({ reducer });
export type IStoreState = ReturnType<typeof store.getState>;

store.dispatch(initialLoadMessage());
export default store;
