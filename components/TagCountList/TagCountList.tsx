import { Dispatch, SetStateAction } from "react";

interface Props {
  tags: {
    [key: string]: number;
  };
  selectedTag: string;
  setSelectedTag: Dispatch<SetStateAction<string>>;
}

function TagCountList({ tags, selectedTag, setSelectedTag }: Props) {
  function handleClickTag(tagName: string) {
    const isClickedCurSelectedTag = tagName === selectedTag;
    if (isClickedCurSelectedTag) {
      setSelectedTag("");
      return;
    }
    setSelectedTag(tagName);
  }

  return (
    <nav className="absolute left-24 flex flex-col gap-1 text-gray-700 p-6">
      {Object.entries(tags).map(([tagName, tagCount]) => (
        <div
          key={tagName}
          className={`${tagName === selectedTag ? "font-bold" : ""} flex gap-1 cursor-pointer hover:text-black`}
          onClick={() => handleClickTag(tagName)}
        >
          <div>{tagName}</div>
          <div>({tagCount})</div>
        </div>
      ))}
    </nav>
  );
}

export default TagCountList;
