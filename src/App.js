import "./App.css";
import React from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";
import RepoCard from "./components/RepoCard";
class App extends React.Component {
  state = {
    user: null,
    userDataerror: null,
    reposError: null,
    loading: false,
    repos: [],
  };
  fetchUserData = async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (res.ok) {
      const data = await res.json();
      return { data };
    }
    const error = (await res.json()).message;
    return { error };
  };
  fetchRepos = async (username) => {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?page=1`
    );
    if (res.ok) {
      const data = await res.json();
      return { data };
    }
    const error = (await res.json()).message;
    return { error };
  };
  fetchData = async (username) => {
    this.setState({ loading: true }, async () => {
      try {
        const [user, repos] = await Promise.all([
          this.fetchUserData(username),
          this.fetchRepos(username),
        ]);
        if (user.data !== undefined && repos.data !== undefined) {
          return this.setState({
            user: user.data,
            repos: repos.data,
            loading: false,
            userDataerror: null,
            reposError: null,
          });
        }
        this.setState({
          userDataerror: user.error,
          reposError: repos.error,
          loading: false,
        });
      } catch (err) {
        this.setState({
          UserDataerror: "There was some Error",
          loading: false,
        });
      }
    });
    /**Fetch the user Data */
  };
  render() {
    const { userDataerror, reposError, loading, user, repos } = this.state;
    return (
      <div>
        <Search fetchData={this.fetchData} />
        <div className="container">
          <div className="text-center pt-5">
            {loading && <p>Loading...</p>}
            {userDataerror && <p className="text-danger">{userDataerror}</p>}
          </div>

          {!userDataerror && !loading && user && <UserCard data={user} />}
          {reposError && <p className="text-danger">{reposError}</p>}
          {!loading &&
            !reposError &&
            repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
        </div>
      </div>
    );
  }
}

export default App;
