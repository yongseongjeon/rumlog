import { describe } from "node:test";
import { extractFileName, spaceToDash } from "./util.ts";
import { ERROR_MESSAGE } from "../const/errorMessage.ts";

describe("spaceToDash", () => {
  it("공백을 -로 변경한다.", () => {
    const input = "Hello World";
    const output = spaceToDash(input);
    expect(output).toBe("Hello-World");
  });

  it("공백이 없으면 그대로 반환한다.", () => {
    const input = "HelloWorld";
    const output = spaceToDash(input);
    expect(output).toBe("HelloWorld");
  });

  it("공백이 여러개인 경우에도 모두 -로 변경한다.", () => {
    const input = "Hello  World";
    const output = spaceToDash(input);
    expect(output).toBe("Hello--World");
  });
});

describe("extractFileName", () => {
  it(". 앞의 문자열을 추출한다.", () => {
    const input = "HelloWorld.md";
    const output = extractFileName(input);
    expect(output).toBe("HelloWorld");
  });
  it(".이 2개 이상이어도 마지막 . 앞의 문자열을 추출한다.", () => {
    const input = "Hello.World.md";
    const output = extractFileName(input);
    expect(output).toBe("Hello.World");
  });
  it(".이 없으면 에러가 발생한다.", () => {
    const input = "HelloWorld";
    expect(() => extractFileName(input)).toThrow(ERROR_MESSAGE.UTIL.MUST_CONTAIN_COMMA);
  });
});
