import path from "path";
import fs from "fs";

interface Props {
  postName: string;
}

export function getPost({ postName }: Props) {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const filePath = path.join(postsDirectory, postName);
  return fs.readFileSync(filePath, "utf8");
}
