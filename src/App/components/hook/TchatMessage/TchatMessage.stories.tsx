/* eslint-disable */
import TchatMessage from "./TchatMessage";

export default {
  title: "TchatMessage",
};

export const Default = () => (
  <TchatMessage
    message={{
      text: "Premier message",
      id: 0,
      dt: "XXXX",
      from: 1,
    }}
    user={undefined}
  />
);

Default.story = {
  name: "default",
};
