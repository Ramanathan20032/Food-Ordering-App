import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
  constructor(){
    super()
    console.log("Parent Constructor")
  }

  componentDidMount(){
    console.log("Parent Component Did Mount")
  }

  render(){
    console.log("Parent Render")
    return(
      <>
        <h1>About Us</h1>
        <p>About Page Content</p>
        <UserClass name={"Class Component"}/>
      </>
    )
  }
}


export default About;