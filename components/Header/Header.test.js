import { render, screen } from "@testing-library/react";
import Header, { GITHUB_LINK, RESUME_LINK } from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("로고를 표시한다", () => {
    const logo = screen.getByText("Rumlog");
    expect(logo).toBeInTheDocument();
    expect(logo.closest("a")).toHaveAttribute("href", "/");
  });

  it("Resume 링크를 표시한다", () => {
    const resumeLink = screen.getByText("Resume");
    expect(resumeLink).toBeInTheDocument();
    expect(resumeLink.closest("a")).toHaveAttribute("href", RESUME_LINK);
  });

  it("GitHub 링크를 표시한다", () => {
    const githubLink = screen.getByText("GitHub");
    expect(githubLink).toBeInTheDocument();
    expect(githubLink.closest("a")).toHaveAttribute("href", GITHUB_LINK);
  });
});
