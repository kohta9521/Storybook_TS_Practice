import { ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Hellobutton = () => <Button label="Hello!" />