import { act, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from '../../utils/appStore';
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from '../../mock/mockDataRestaurantMenuList';
import '@testing-library/jest-dom';


global.fetch() = jest.fn(() => {
    return Promise.resolve({
        json : () =>  {
            return Promise.resolve(MOCK_DATA);
        }
    })
})


it("should Load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
            <Headers />
            <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

    const accordianHeader = screen.getByText("Biryani (5)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(5);

    expect(screen.getByText("cart - (0 items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole('button', {name : "Add +"});
    
    fireEvent.click(addBtns[0])
    expect(screen.getByText("cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1])
    expect(screen.getByText("cart - (2 items)")).toBeInTheDocument();
});




