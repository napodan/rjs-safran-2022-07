/* eslint-disable */
import TchatUser from "./TchatUser";

export default {
  title: "TchatUser",
};

export const Default = () => (
  <TchatUser
    user={{
      id: 0,
      nick: "champix",
      fullName: "Alex Champix",
      img: null,
      timeLastAction: new Date().toString(),
    }}
  />
);

Default.story = {
  name: "default",
};
