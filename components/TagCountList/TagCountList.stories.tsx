import type { Meta, StoryObj } from "@storybook/react";
import TagCountList from "./TagCountList";

const meta: Meta<typeof TagCountList> = {
  component: TagCountList,
};

export default meta;
type Story = StoryObj<typeof TagCountList>;

export const One: Story = {
  render: () => <TagCountList tags={{ "태그 1": 1 }} />,
};

export const Multiple: Story = {
  render: () => <TagCountList tags={{ "태그 1": 1, "태그 2": 2, "태그 3": 3 }} />,
};
