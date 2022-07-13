import "@testing-library/jest-dom/extend-expect";
// import configureStore from "redux-mock-store";
import { add } from "./messagesSlice";
import store from "./store";

describe("slice message", () => {
  it("should dispatch construct addACtion", async () => {
    const message = {
      id: 10,
      dt: new Date().toString(),
      from: 0,
      to: 0,
      text: "hello",
    };
    const addmessage = add(message);
    expect(addmessage.payload).toBe(message);

    const beforeAddLength = store.getState().messages.values.length;
    await store.dispatch(addmessage);
    const afterAddLength = store.getState().messages.values.length;
    expect(afterAddLength - beforeAddLength).toBe(1);
    const messageFound = store
      .getState()
      .messages.values.find((m) => m.id === message.id);
    console.log(messageFound);
    expect(messageFound).not.toBe(null);
  });
});
