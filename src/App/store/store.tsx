import { configureStore } from "@reduxjs/toolkit";
import messageReducer, {
  IMessagesStoreState,
  initialLoadMessage,
} from "./messagesSlice";
import userReducer, {
  IUsersStoreState,
  loadInitialUsers,
  close,
  closed,
  opened,
  wsUpdateValues,
  requestAllUsers,
} from "./usersSlice";
export interface IStotreState {
  messages: IMessagesStoreState;
  users: IUsersStoreState;
}
export type TRootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: { messages: messageReducer, users: userReducer },
});
export default store;
// store.dispatch(initialLoadMessage());
// store.dispatch(loadInitialUsers());

const adrwssrv = "ws://localhost:8080";
export let exampleSocket = new WebSocket(adrwssrv);

exampleSocket.onclose = (ev: CloseEvent) => {
  store.dispatch(closed());
};
exampleSocket.onopen = (ev: Event) => {
  store.dispatch(opened());
};
exampleSocket.onmessage = (ev: MessageEvent) => {
  store.dispatch(wsUpdateValues(JSON.parse(ev.data)));
};

export const requestUserFromWS = () => {
  return requestAllUsers(exampleSocket);
};
export const closeWS = () => {
  return close(exampleSocket);
};
