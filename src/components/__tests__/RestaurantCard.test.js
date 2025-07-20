import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../mock/mockRestaurantData.json";
import { CON_URL } from "../utils/constants";
import greenStar from "../assets/images/green-star-icon.png";
import "@testing-library/jest-dom"

// ! Props Testing
it("should render the restaurant card with the data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const RestaurantName = screen.getByText('KFC')

  expect(RestaurantName).toBeInDocument();
});
