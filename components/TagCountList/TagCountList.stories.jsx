import { useState } from "react";
import TagCountList from "./TagCountList";

const meta = {
  component: TagCountList,
};

export default meta;

const Template = (args) => {
  const [selectedTag, setSelectedTag] = useState("");

  return <TagCountList tags={{ "태그 1": 1 }} selectedTag={selectedTag} setSelectedTag={setSelectedTag} {...args} />;
};

export const Default = Template.bind({});
