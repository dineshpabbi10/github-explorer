import React from "react";
export default class Search extends React.Component {
  state = {
    username: "",
  };
  handleUsernameChange = (e) => {
    const value = e.target.value;
    this.setState({
      username: value,
    });
  };
  render() {
    const { username } = this.state;
    return (
      <input
        value={username}
        type="text"
        name="username"
        placeholder="username"
        onChange={this.handleUsernameChange}
      />
    );
  }
}
