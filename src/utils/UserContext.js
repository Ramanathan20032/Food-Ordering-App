import { createContext } from "react";

// ! createContext
// ? createContext is used to create a context object.
// ? This object is used to store the data that needs to be shared between components.
const UserContext = createContext({
  loggedInUser : "Default User !!!!"
})

export default UserContext;