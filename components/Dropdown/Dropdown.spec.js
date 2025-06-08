import React from "react";
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  const mockSetSelectedCity = jest.fn();
  const locations = ["London", "Lisbon", "Nairobi"];

  beforeEach(() => {
    mockSetSelectedCity.mockClear();
  });

  it("renders a heading and select element", () => {
    render(
      <Dropdown
        selectedCity=""
        setSelectedCity={mockSetSelectedCity}
        locations={locations}
      />
    );

    expect(screen.getByRole("heading", { name: /choose a location/i })).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders all location options including placeholder", () => {
    render(
      <Dropdown
        selectedCity=""
        setSelectedCity={mockSetSelectedCity}
        locations={locations}
      />
    );

    expect(screen.getByRole("option", { name: "-- Select a city --" })).toBeInTheDocument();

    locations.forEach((city) => {
      expect(screen.getByRole("option", { name: city })).toBeInTheDocument();
    });
  });

  it("calls setSelectedCity on change", () => {
    render(
      <Dropdown
        selectedCity=""
        setSelectedCity={mockSetSelectedCity}
        locations={locations}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "Lisbon" },
    });

    expect(mockSetSelectedCity).toHaveBeenCalledWith("Lisbon");
  });

  it("sets the selected value properly", () => {
    render(
      <Dropdown
        selectedCity="Nairobi"
        setSelectedCity={mockSetSelectedCity}
        locations={locations}
      />
    );

    expect(screen.getByDisplayValue("Nairobi")).toBeInTheDocument();
  });
});