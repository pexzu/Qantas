import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Hotels } from "./Hotels";

describe("Hotels", () => {
  it("renders Hotels component", () => {
    render(<Hotels />);
  });
});

describe("Hotels", () => {
  it("Checking logo is rendering", () => {
    const result = render(<Hotels />);
    const logoElement = result.container.querySelector("#logo");
    expect(logoElement).toBeInTheDocument();
  });
});

describe("Hotels", () => {
  it("renders Hotels component with right sorting as button clicks and sorting function", async () => {
    render(<Hotels />);
    const sortButton = screen.getByRole("button");
    expect(sortButton).toBeInTheDocument();
    const priceSorting = screen.getByText("Price low-high");
    expect(priceSorting).toBeInTheDocument();
    await userEvent.click(sortButton);
    const priceSortingChange = screen.getByText("Price high-low");
    expect(priceSortingChange).toBeInTheDocument();
  });
});
