import type { NextPage } from "next";
import { getAllPost, getPost } from "../utils/getPost";
import Link from "next/link";
import { Metadata } from "./[post]";
import Tags from "../components/Tags/Tags";
import Date from "../components/Date/Date";

const Home: NextPage = ({ postMetadata }) => {
  return (
    <>
      <ul>
        {postMetadata.map(({ title, date, tags, author }: Metadata) => (
          <Link key={title} href={`/${title}`}>
            <div className="w-full h-36 border border-black flex-col hover:bg-gray-100">
              <h1>{title}</h1>
              <Date date={date} />
              <Tags tags={tags} />
            </div>
          </Link>
        ))}
      </ul>
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

