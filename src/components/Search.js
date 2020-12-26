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
    const { fetchData } = this.props;
    const { username } = this.state;
    return (
      <div className="mainDivision">
        <div className="inputDivision">
          <input
            value={username}
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={this.handleUsernameChange}
            className="inputUser"
          />
        </div>
        <div className="buttonDivision">
          <button
            onClick={() => fetchData(username)}
            className="btn btn-large btn-success"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
