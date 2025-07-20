import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// ! Test for button tag
it("should load header component with login-btn", () => {
  // header component has redux code, browse can't able to understand the code.
  // need to wrap the provider to the component
  // * Render
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // * Quering
  const loginButton = screen.getByRole("button");
  //   const loginButton = screen.getByRole("button", { name: "log in" });

  // * Assertion
  expect(loginButton).toBeInTheDocument();
});

// ! load header component with count 0
it("should load header component with cart with [count - 0]", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartCount = screen.getByText("Cart - (0 items)");
  expect(cartCount).toBeInTheDocument();
});

// ! load header component with cart menu
it("should load header component with cart menu", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // Using regex to flexible - the word cart is present then it will return true
  const cartCount = screen.getByText(/Cart/);
  expect(cartCount).toBeInTheDocument();
});

// ! whether toggle is working or not
it("should change the login btn to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header/>
      </Provider>
    </BrowserRouter>
  );

  const loginToggleButton = screen.getByRole("button", /{name : "log in"}/);

  fireEvent.click(loginToggleButton)

  const logoutToggleButton = screen.getByRole("button", /{name : "log out"}/);

  expect(logoutToggleButton).toBeInTheDocument();
});
