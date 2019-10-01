import React from "react";
import axios from "axios";

import UserCard from "./Components/UserCard";

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
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
      console.log("hello");
    }
  }

  handleChanges = e => {
    this.setState({
      search: e.target.value
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
                <h2>Created by:</h2>
                <UserCard user={this.state.user} />
                <h4>Followed by:</h4>
                {/* Set this state to user search */}
                <UserCard user={this.state.user} />
              </div>
            </div>
            <div className="flex-large">
              <form>
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
