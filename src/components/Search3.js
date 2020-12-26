import React from "react";
export default class Search extends React.Component {
  handlekeyDown = (e) => {
    const value = e.target.value;
    if (e.keyCode === 13) {
      alert("Current Value is : " + value);
    }
  };
  render() {
    return (
      <div>
        <input
          onKeyDown={this.handlekeyDown}
          type="text"
          name="username"
          placeholder="username"
        />
      </div>
    );
  }
}
