import React from "react";
import { render, screen } from "@testing-library/react";
import UVCurrent from "./UVCurrent";
import '@testing-library/jest-dom';

describe("UVCurrent component", () => {
  it("displays Low for value <= 3", () => {
    render(<UVCurrent value={2} />);
    const strong = screen.getByTestId('strong-tag');
    expect(strong).toHaveTextContent("2 (Low)");
    expect(strong).toHaveStyle("color: rgb(0, 128, 0)");
  });

  it("displays Moderate for value > 3 and <= 6", () => {
    render(<UVCurrent value={5} />);
    const strong = screen.getByTestId('strong-tag');
    expect(strong).toHaveTextContent("5 (Moderate)");
    expect(strong).toHaveStyle("color: rgb(255, 165, 0)");
  });

  it("displays High for value > 6", () => {
    render(<UVCurrent value={8} />);
    const strong = screen.getByTestId('strong-tag');
    expect(strong).toHaveTextContent("8 (High)");
    expect(strong).toHaveStyle("color: rgb(255, 0, 0)");
  });
});
