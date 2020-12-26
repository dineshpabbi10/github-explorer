import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
class App extends React.Component {
  state = {
    user: null,
    error: null,
    loading: false,
  };
  fetchUserData = async (username) => {
    this.setState({ loading: true }, async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (res.ok) {
          console.log("Hello");
          const data = await res.json();
          console.log(data);
          return this.setState({
            user: data,
            loading: false,
            error: null,
          });
        }
        const { message } = await res.json();
        this.setState({
          error: message,
          loading: false,
        });
      } catch (err) {
        console.log(err);
        this.setState({
          error: "There was some Error",
          loading: false,
        });
      }
    });
    /**Fetch the user Data */
  };
  render() {
    const { error, loading, user } = this.state;
    return (
      <div>
        <Search fetchData={this.fetchUserData} />
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {!error && !loading && user && <UserCard data={user} />}
      </div>
    );
  }
}

export default App;
