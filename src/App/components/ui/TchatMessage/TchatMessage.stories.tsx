/* eslint-disable */
import TchatMessage from "./TchatMessage";

export default {
  title: "TchatMessage",
};

export const Default = () => (
  <TchatMessage
    message={{ id: 0, text: "", dt: new Date().toString(), from: 0 }}
    user={{
      id: 0,
      nick: "",
      fullName: "",
      img: null,
      timeLastAction: new Date().toString(),
    }}
  />
);

Default.story = {
  name: "default",
};
