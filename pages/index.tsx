import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { getPost } from "../utils/getPost";

const Home: NextPage = ({ metadata, content }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export async function getStaticProps() {
  const { metadata, content } = getPost({ fileName: "2023-10-27-hello.md" });

  return {
    props: {
      metadata,
      content,
    },
  };
}

export default Home;

