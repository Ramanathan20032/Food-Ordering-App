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
      <div className="bg-purple-100 border-2 border-y-sky-950 rounded-lg p-5 w-fit">
        <button
          className="bg-blue-400 hover:bg-blue-500 text-white px-2 py-1 mb-3 rounded-md cursor-pointer transition-all duration-300"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Counter
        </button>
        <h6>Counter : {count}</h6>
        <h2 className="text-teal-900 font-bold text-xl">Name : {name}</h2>
        <h3>Bio : {bio}</h3>
        <h4 className="text-sm">Login : {login}</h4>
      </div>
    );
  }
}

export default UserClass;
