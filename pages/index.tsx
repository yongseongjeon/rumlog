import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import { getPost } from "../utils/getPost";

const Home: NextPage = ({ markdownString }) => {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>;
};

export async function getStaticProps() {
  const markdownString = getPost({ fileName: "2023-10-27-hello.md" });

  return {
    props: {
      markdownString,
    },
  };
}

export default Home;

