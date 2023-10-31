import path from "path";
import fs from "fs";
import matter from "gray-matter";

interface Props {
  fileName: string;
}

const postsDirectory = path.join(process.cwd(), "_posts");

export function getPost({ fileName }: Props) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { metadata: data, content };
}

export function getAllPost() {
  return fs.readdirSync(postsDirectory).map((fileName) => fileName.split(".").at(0));
}
