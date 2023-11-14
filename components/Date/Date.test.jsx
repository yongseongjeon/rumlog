import Date from "./Date";
import { render, screen } from "@testing-library/react";

describe("Date", () => {
  it("올바른 날짜 형식으로 렌더링한다.", () => {
    render(<Date date={"2023-10-30 12:24:00"} />);
    expect(screen.getByText("2023년 10월 30일 12:24:00")).toBeInTheDocument();
  });
});
