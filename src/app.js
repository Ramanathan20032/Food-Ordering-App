import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";
import UserContext from "./utils/UserContext";

const About = lazy(() => {
  return import("./components/About");
});

const Grocery = lazy(() => {
  return import("./components/Grocery");
});

const AppLayout = () => {
  // ! Modifying the UserContext - ContextProvider
  // ? Modifying the UserContext to store the data in the context object.
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    // ? make a api call to get the user name
    const data = {
      name: "ramanathan20032",
    };
    setUserName(data.name);
  });

  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <React.Fragment>
        <Header />
        <Outlet />
      </React.Fragment>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h3>Loading About...</h3>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h3>Loading Grocery...</h3>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
