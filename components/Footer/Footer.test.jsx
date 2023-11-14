import Footer from "./Footer";
import { render, screen } from "@testing-library/react";

describe("Footer", () => {
  it("올해 년도와 저작권 문구를 표시한다", () => {
    const mockYear = 2023;
    jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));
    render(<Footer />);
    expect(screen.getByText(`© ${mockYear} Rumka. All Rights Reserved.`)).toBeInTheDocument();
    jest.useRealTimers();
  });
});
