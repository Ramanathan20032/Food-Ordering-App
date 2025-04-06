import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        bio: "dummy",
        login: "@dummy",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    console.log("Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/ramanathan20032");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    console.log("Child Render");

    const { count } = this.state;
    const { name, bio, login } = this.state.userInfo;

    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Button
        </button>
        <h6>Conut : {count}</h6>
        <h2>Name : {name}</h2>
        <h3>Bio : {bio}</h3>
        <h4>Login : {login}</h4>
      </div>
    );
  }
}

export default UserClass;
