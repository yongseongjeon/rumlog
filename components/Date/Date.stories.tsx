import type { Meta, StoryObj } from "@storybook/react";
import Date from "./Date";

const meta: Meta<typeof Date> = {
  component: Date,
};

export default meta;
type Story = StoryObj<typeof Date>;

export const Main: Story = {
  render: () => <Date date="2023-11-08 15:50:00" />,
};
