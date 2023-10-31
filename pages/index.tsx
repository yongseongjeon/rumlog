import type { NextPage } from "next";
import { getAllPost } from "../utils/getPost";
import Link from "next/link";

const Home: NextPage = ({ res }) => {
  return (
    <>
      <ul>
        {res.map((title: string) => (
          <div key={title} className="w-full h-12 border border-black">
            <Link href={`/${title}`}>{title}</Link>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const res = getAllPost();

  return {
    props: {
      res,
    },
  };
}

