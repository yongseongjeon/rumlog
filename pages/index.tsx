import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { getPost } from "../utils/getPost";

const Home: NextPage = ({ metadata, content }) => {
  return (
    <>
      <h1>{metadata.title}</h1>
      <div>{metadata.date}</div>
      <div className="flex space-x-2">
        {metadata.tags.map((tag: string) => (
          <span key={tag} className="bg-blue-500 text-white px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
};

export async function getStaticProps() {
  const { metadata, content } = getPost({ fileName: "2023-10-26-test.md" });

  return {
    props: {
      metadata,
      content,
    },
  };
}

export default Home;

