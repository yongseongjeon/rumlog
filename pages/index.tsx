import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { getPost } from "../utils/getPost";
import Date from "../components/Date/Date";

const Home: NextPage = ({ metadata, content }) => {
  return (
    <>
      <div className="flex-col space-y-6">
        <h1>{metadata.title}</h1>
        <div className="flex space-x-2">
          <div className="font-bold">{metadata.author}</div>
          <Date date={metadata.date} />
        </div>
        <div className="flex space-x-2">
          {metadata.tags.map((tag: string) => (
            <span key={tag} className="text-gray-500">
              #{tag}
            </span>
          ))}
        </div>
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

