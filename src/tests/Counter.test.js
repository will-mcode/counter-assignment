import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter.js";

beforeEach(() => {
  render(<Counter />);
});

test("renders counter message", () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  const initialCount = screen.getByTestId("count");
  expect(initialCount.textContent).toBe("0");
});

test("clicking + increments the count", () => {
  const addButton = screen.getByText("+");
  fireEvent.click(addButton);
  const countElement = screen.getByTestId("count");
  expect(countElement.textContent).toBe("1");
});

test("clicking - decrements the count", () => {
  const subtractButton = screen.getByText("-");
  fireEvent.click(subtractButton);
  const countElement = screen.getByTestId("count");
  expect(countElement.textContent).toBe("-1");
});

