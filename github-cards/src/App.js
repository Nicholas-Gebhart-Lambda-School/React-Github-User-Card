import React from "react";
import axios from "axios";

import UserCard from "./Components/UserCard";
import FollowerCard from "./Components/FollowerCard";

class App extends React.Component {
  state = {
    user: [],
    search: "",
    userList: []
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/gebhartn")
      .then(res => {
        this.setState({
          user: res.data
        });
        console.log(this.state.user);
      })
      .catch(err => {
        console.error("problem with the github api", err);
      });
    axios
      .get("https://api.github.com/users/gebhartn/followers")
      .then(res => {
        this.setState({
          userList: res.data
        });
        console.log(this.state.userList);
      })
      .catch(err => {
        console.error("problem with the github api", err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      axios
        .get(`https://api.github.com/users/${this.state.search}`)
        .then(res => {
          this.setState({
            user: res.data
          });
          console.log(this.state.user);
        })
        .catch(err => {
          console.error("problem with the github api", err);
        });
      axios
        .get(`https://api.github.com/users/${this.state.search}/followers`)
        .then(res => {
          this.setState({
            userList: res.data
          });
          console.log(this.state.userList);
        })
        .catch(err => {
          console.error("problem with the github api", err);
        });
    }
  }

  handleChanges = e => {
    this.setState({
      search: e.target.value
    });
  };

  searchSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.search}`)
      .then(res => {
        this.setState({
          user: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1>GitHub Cards</h1>

          <div className="flex-row">
            <div className="flex-large">
              <div>
                <h2>User:</h2>
                <UserCard user={this.state.user} />
                <h4>Github Users:</h4>
                {this.state.userList.length > 0 ? (
                  this.state.userList.map(follower => {
                    return <FollowerCard follower={follower} />;
                  })
                ) : (
                  <h4>Searching for users</h4>
                )}
              </div>
            </div>
            <div className="flex-large">
              <form onSubmit={this.searchSubmit}>
                <label htmlFor="name">Find User</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.search}
                  onChange={this.handleChanges}
                />

                <button className="button muted-button">Search</button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
