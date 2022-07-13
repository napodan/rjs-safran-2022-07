import { configureStore } from "@reduxjs/toolkit";
import messageReducer,{IMessagesStoreState, initialLoadMessage} from "./messagesSlice";
import userReducer, { close, closed, IUsersStoreState, loadInitialUsers, opened, requestAllUsers, wsUpdateValues } from './usersSlice'
export interface IStotreState{messages:IMessagesStoreState,users:IUsersStoreState}
export type TRootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: { messages: messageReducer,users:userReducer },
});
export default store;
store.dispatch(initialLoadMessage())
//store.dispatch(loadInitialUsers())

const adrwssrv = "ws://localhost:8080";
export let exampleSocket = new WebSocket(adrwssrv);
exampleSocket.onclose=function(ev:CloseEvent){
  store.dispatch(closed());
}
exampleSocket.onopen=function(ev:Event){
  store.dispatch(opened())
  store.dispatch(requestUserFromWS())
}
exampleSocket.onmessage=function(ev:MessageEvent){
  store.dispatch(wsUpdateValues(JSON.parse(ev.data).data))
}
export function requestUserFromWS(){
  return requestAllUsers(exampleSocket);
}
export function closeWS(){
  return close(exampleSocket);
}
