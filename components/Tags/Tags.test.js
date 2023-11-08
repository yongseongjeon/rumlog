import { render, screen } from "@testing-library/react";
import Tags from "./Tags";

describe("Tags", () => {
  it("태그 1개를 표시한다", () => {
    render(<Tags tags={["BFS"]} />);
    expect(screen.getByText("#BFS")).toBeInTheDocument();
  });
  it("태그 3개를 표시한다", () => {
    render(<Tags tags={["알고리즘", "자료구조", "운영체제"]} />);
    expect(screen.getByText("#알고리즘")).toBeInTheDocument();
    expect(screen.getByText("#자료구조")).toBeInTheDocument();
    expect(screen.getByText("#운영체제")).toBeInTheDocument();
  });
});
