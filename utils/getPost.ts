import path from "path";
import fs from "fs";

interface Props {
  fileName: string;
}

export function getPost({ fileName }: Props) {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const filePath = path.join(postsDirectory, fileName);
  return fs.readFileSync(filePath, "utf8");
}
