import React from "react";
export default class Search extends React.Component {
  inpuRef = React.createRef();
  handleClick = () => {
    const value = this.inpuRef.current.value;
    alert("Current Value is :" + value);
  };
  render() {
    return (
      <div>
        <input
          ref={this.inpuRef}
          type="text"
          name="username"
          placeholder="username"
        />
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
