import { getAllPost, getPost } from "../../utils/getPost";
import Date from "../../components/Date/Date";
import Tags from "../../components/Tags/Tags";
import MarkdownRenderer from "../../components/MarkdownRenderer/MarkdownRenderer";

export interface Metadata {
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
      <MarkdownRenderer markdown={content} />
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
  const posts = getAllPost();
  const paths = posts.map((title) => {
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
