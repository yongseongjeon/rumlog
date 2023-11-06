import { getPost, getAllPost } from "./getPost.ts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

jest.mock("fs");
jest.mock("path");
jest.mock("gray-matter");

describe("getPost", () => {
  it("getPost는 주어진 파일 이름으로 파일 내용을 읽어 메타데이터와 내용을 반환한다", () => {
    const FILE_NAME = "test.md";
    const TITLE = "Test";
    const CONTENT = "Test content";
    const DATE = "2023-11-06 00:00:00";
    const TAGS = ["test", "code"];
    const AUTHOR = "someone";
    const mockData = `---
                      title: ${TITLE}
                      date: ${DATE}
                      tags: ${TAGS}
                      author: ${AUTHOR}
                      ---
                      ${CONTENT}`;
    const metadata = {
      title: TITLE,
      date: DATE,
      tags: TAGS,
      author: AUTHOR,
    };
    const mockResult = { data: metadata, content: CONTENT };

    matter.mockReturnValue(mockResult);
    fs.readFileSync.mockReturnValue(mockData);
    path.join.mockReturnValue(`/fake/path/_posts/${FILE_NAME}`);

    const result = getPost({ fileName: FILE_NAME });
    expect(result).toEqual({ metadata: mockResult.data, content: mockResult.content });
  });
});

describe("getAllPost", () => {
  it("getAllPost는 확장자를 제외한 파일 명을 반환한다.", () => {
    const mockFiles = ["post1.md", "post2.md"];
    fs.readdirSync.mockReturnValue(mockFiles);
    const result = getAllPost();
    expect(result).toEqual(["post1", "post2"]);
  });
});
