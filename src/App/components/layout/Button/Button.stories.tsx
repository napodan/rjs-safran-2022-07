/* eslint-disable */
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button onclick={() => {}}>children</Button>;
export const BlueButton = () => (
  <Button onclick={() => {}} bgColor="skyblue">
    blue button
  </Button>
);

Default.story = {
  name: "default",
};
BlueButton.story = {
  name: "blue",
};
