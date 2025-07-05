import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

// ! Contact page Test Cases
describe("Contact Page Test Cases", () => {
  // ! Test for heading Tag
  it("Does Contact Us Component Rendering", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  // ! Test for button tag
  test("Does p tag is in contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  // ! Test for Text
  it("Does p tag is in contact Component", () => {
    render(<Contact />);

    const Text = screen.getByText("contact Us");
    // Assertion
    expect(Text).toBeInTheDocument();
  });

  // ! Test for the 2 input boxes
  test("does two input boxes are there", () => {
    render(<Contact />);

    // ! getAllByRole - to get multiple items
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    // expect(inputBoxes).toBeInTheDocument();
  });
});
