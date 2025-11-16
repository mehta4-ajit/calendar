import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import Calendar from "./Calendar";

describe("Calendar Component", () => {
  it("renders invalid date message for wrong input", () => {
    render(<Calendar date={"2025"} />);
    expect(screen.getByText("Invalid date")).toBeInTheDocument();
  });

  it("renders month and year correctly", () => {
    const date = new Date(2025, 0, 1); // Jan 2025
    render(<Calendar date={date} />);

    expect(screen.getByText(/January/i)).toBeInTheDocument();
    expect(screen.getByText(/2025/i)).toBeInTheDocument();
  });
});
