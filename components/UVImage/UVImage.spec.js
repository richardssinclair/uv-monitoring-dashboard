import React from "react";
import { render, screen } from "@testing-library/react";
import UVImage from "./UVImage";
import "@testing-library/jest-dom";

describe("UVImage component", () => {

  it("renders correct images for value > 11", () => {
    render(<UVImage value={12} />);
    const imageOne = screen.getByTestId("image-one");
    const imageTwo = screen.getByTestId("image-two");
    expect(imageOne).toHaveAttribute("src", "/UV-Index-5.png");
    expect(imageTwo).toHaveAttribute("src", "uvhot.png");
  });

  it("renders correct images for value = 11", () => {
    render(<UVImage value={11} />);
    const imageOne = screen.getByTestId("image-one");
    const imageTwo = screen.getByTestId("image-two");
    expect(imageOne).toHaveAttribute("src", "/UV-Index-4.png");
    expect(imageTwo).toHaveAttribute("src", "uvhot.png");
  });

  test("renders correct images for value = 7", () => {
    render(<UVImage value={7} />);
    const imageOne = screen.getByTestId("image-one");
    const imageTwo = screen.getByTestId("image-two");
    expect(imageOne).toHaveAttribute("src", "/UV-Index-3.png");
    expect(imageTwo).toHaveAttribute("src", "uvhot.png");
  });

  test("renders correct images for value = 4", () => {
    render(<UVImage value={4} />);
    const imageOne = screen.getByTestId("image-one");
    const imageTwo = screen.getByTestId("image-two");
    expect(imageOne).toHaveAttribute("src", "/UV-Index-2.png");
    expect(imageTwo).toHaveAttribute("src", "uvmedium.png");
  });

  test("renders correct images for value = 2", () => {
    render(<UVImage value={2} />);
    const imageOne = screen.getByTestId("image-one");
    const imageTwo = screen.getByTestId("image-two");
    expect(imageOne).toHaveAttribute("src", "/UV-Index-1.png");
    expect(imageTwo).toHaveAttribute("src", "/uvgood.png");
  });
});
