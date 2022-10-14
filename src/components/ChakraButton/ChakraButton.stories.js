import React from "react";
import { Button } from "@chakra-ui/react";
import { action, actions } from "@storybook/addon-actions";

export default {
  title: "Chakra/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" }, // adding actions - only works for args mech.
  },
};

export const Success = () => (
  <Button onClick={action("Click event")} colorScheme="green">
    Success
  </Button>
);
export const Failure = () => (
  <Button {...actions("onClick", "onMouseOver")} colorScheme="red">
    Failure
  </Button>
);

const template = (args) => <Button {...args} />;

export const SuccessA = template.bind({});
SuccessA.args = {
  colorScheme: "green",
  children: "Success Args",
};

export const FailureA = template.bind({});
FailureA.args = {
  colorScheme: "red",
  children: "Danger Args",
};
