import { render, screen } from "@testing-library/react";
import TagCountList from "./TagCountList";

describe("TagCountList", () => {
  it("태그 1개를 표시한다", () => {
    render(<TagCountList tags={{ BFS: 1 }} />);
    expect(screen.getByText("BFS")).toBeInTheDocument();
  });
  it("태그 3개를 표시한다", () => {
    render(<TagCountList tags={{ 알고리즘: 1, 자료구조: 2, 운영체제: 3 }} />);
    expect(screen.getByText("알고리즘")).toBeInTheDocument();
    expect(screen.getByText("자료구조")).toBeInTheDocument();
    expect(screen.getByText("운영체제")).toBeInTheDocument();
  });
});
