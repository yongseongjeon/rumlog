import path from "path";
import fs from "fs";
import matter from "gray-matter";

interface Props {
  fileName: string;
}

export function getPost({ fileName }: Props) {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { metadata: data, content };
}
