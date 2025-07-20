import { act, fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mock/mockRestaurantList.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// ! enabling the same fetch function that the browser give us in jestDom Environment.
global.fetch = jest.fn(() => {
  return promise.resolve({
    json: () => {
      return promise.resolve(MOCK_DATA);
    },
  });
});

// ! Search filter
it("Should Render The Burger Restaurant list in Search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  // * search-btn
  const searchBtn = screen.getByRole("button", { name: "Search" });

  // * search-input
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);

  //   expect(searchBtn).toBeInTheDocument();
  //   expect(searchInput).toBeInTheDocument();

  // ! screen should load four cards
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(1);
});

// ! Top Rated filter
it("should filter the top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardBeforeFilter.length).toBe(20);

  const topRatedButton = screen.getByRole("button", /{name : Above}/);
  fireEvent.click(topRatedButton);

  const cardAfterFilter = screen.getAllByTestId("rescard");
  expect(cardAfterFilter.length).toBe(3);
});
