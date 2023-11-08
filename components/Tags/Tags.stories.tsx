import type { Meta, StoryObj } from "@storybook/react";
import Tags from "./Tags";

const meta: Meta<typeof Tags> = {
  component: Tags,
};

export default meta;
type Story = StoryObj<typeof Tags>;

export const One: Story = {
  render: () => <Tags tags={["태그 1"]} />,
};

export const Multiple: Story = {
  render: () => <Tags tags={["태그 1", "태그 2", "태그 3"]} />,
};
