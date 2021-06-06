import { getByTestId, render } from "@testing-library/react";
import Header from "./Header";

let container = null;

beforeEach(() => {
  container = render(<Header />).container;
});

it("it should show logo", () => {
  expect(getByTestId(container, 'logo')).toBeTruthy();
});

it("should show search", () => {
    expect(getByTestId(container, 'search')).toBeTruthy();
  });

  it("should show menu", () => {
    expect(getByTestId(container, 'menu')).toBeTruthy();
  });
