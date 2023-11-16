import type { NextPage } from "next";
import { getAllPost, getPost } from "../utils/getPost";
import Link from "next/link";
import { Metadata } from "./[post]";
import Tags from "../components/Tags/Tags";
import Date from "../components/Date/Date";
import { spaceToDash } from "../utils/util";
import TagCountList from "../components/TagCountList/TagCountList";
import { useState } from "react";

interface Props {
  postMetadata: Metadata[];
}

interface TagsNumber {
  [key: string]: number;
}

function extractTagsFromPostMetadata(postMetadata: Metadata[]) {
  return postMetadata.map(({ tags }) => tags).flat(1);
}

function countEachTagsNumber(tags: string[]) {
  return tags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {} as TagsNumber);
}

const Home: NextPage<Props> = ({ postMetadata }: Props) => {
  const allTags = extractTagsFromPostMetadata(postMetadata);
  const tagsNumber = countEachTagsNumber(allTags);
  const [selectedTag, setSelectedTag] = useState("");

  return (
    <>
      <TagCountList tags={tagsNumber} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <div>
        {postMetadata
          .filter(({ tags }) => (selectedTag ? tags.includes(selectedTag) : true))
          .map(({ title, date, tags, author }: Metadata) => (
            <Link key={`${author}-${title}`} href={`/${spaceToDash(title)}`}>
              <div className="w-full h-36 border border-black flex-col hover:bg-gray-100 p-4">
                <h1 className="mt-0">{title}</h1>
                <Date date={date} />
                <Tags tags={tags} />
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const postTitles = getAllPost();
  const postMetadata = postTitles.map((postTitle) => {
    const { metadata } = getPost({ fileName: postTitle + ".md" });
    return metadata;
  });

  return {
    props: {
      postMetadata,
    },
  };
}

