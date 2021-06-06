import { getAllByTestId, getByTestId, render } from "@testing-library/react";
import Homes from "./Homes";

let container = null;

beforeEach(() => {
  container = render(<Homes />).container;
});

//takes all the elements from the container that have the home id
it("it should show homes", () => {
  const homes = getAllByTestId(container, 'home')

  expect(homes.length).toBeGreaterThan(0)
});
