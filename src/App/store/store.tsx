import { configureStore } from "@reduxjs/toolkit";
import messageReducer, {
  IMessagesStoreState,
  initialLoadMessage,
} from "./messagesSlice";
import selectedUserReducer from "./selectedUserSlice";

export interface IStotreState {
  messages: IMessagesStoreState;
}
export type TRootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: { messages: messageReducer, selectedUserReducer },
});
export default store;
store.dispatch(initialLoadMessage());
