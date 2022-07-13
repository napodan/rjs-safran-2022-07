import { configureStore } from "@reduxjs/toolkit";
import messageReducer,{IMessagesStoreState, initialLoadMessage} from "./messagesSlice";
import userReducer, { IUsersStoreState, loadInitialUsers } from './usersSlice'
export interface IStotreState{messages:IMessagesStoreState,users:IUsersStoreState}
export type TRootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: { messages: messageReducer,users:userReducer },
});
export default store;
store.dispatch(initialLoadMessage())
store.dispatch(loadInitialUsers())