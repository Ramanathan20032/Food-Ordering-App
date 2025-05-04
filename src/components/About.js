import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="user-card p-5">
        <p className="text-xl text-center font-bold mb-3">About Us Page</p>
        <UserClass name={"Class Component"} />
      </div>
    );
  }
}

export default About;
