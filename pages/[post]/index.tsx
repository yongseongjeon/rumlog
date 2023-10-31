import ReactMarkdown from "react-markdown";
import { getAllPost, getPost } from "../../utils/getPost";
import Date from "../../components/Date/Date";
import Tags from "../../components/Tags/Tags";

interface Metadata {
  title: string;
  author: string;
  date: string;
  tags: string[];
}

interface Props {
  metadata: Metadata;
  content: string;
}

function Post({ metadata, content }: Props) {
  const { title, tags, author, date } = metadata;

  return (
    <>
      <div className="flex-col space-y-6 mb-16">
        <h1 className="text-5xl">{title}</h1>
        <div className="flex justify-between">
          <Tags tags={tags} />
          <div className="flex space-x-2">
            <div className="font-bold">{author}</div>
            <Date date={date} />
          </div>
        </div>
      </div>
      <ReactMarkdown>{content}</ReactMarkdown>
    </>
  );
}

export default Post;

export async function getStaticProps({ params }) {
  const { metadata, content } = getPost({ fileName: params.post + ".md" });

  return {
    props: {
      metadata,
      content,
    },
  };
}

export async function getStaticPaths() {
  const postFileNames = getAllPost();
  const postTitles = postFileNames.map((fileName) => {
    // e.g. fileName = "test.md"
    //      title = "test"
    const title = fileName.split(".")[0];
    return title;
  });
  const paths = postTitles.map((title) => {
    return {
      params: {
        post: title,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
