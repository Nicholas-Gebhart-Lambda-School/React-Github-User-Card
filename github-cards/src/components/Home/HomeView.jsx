import React from "react";
import { getUserIds, getFollowerIds } from "../../services/gitApi";

import FollowerCard from "../Cards/FollowerCard";

class HomeView extends React.Component {
  state = {
    user: "",
    search: "",
    userList: []
  };

  componentDidMount() {
    getUserIds("gebhartn").then(data => {
      data &&
        this.setState({
          user: data
        });
    });
    getFollowerIds("gebhartn").then(
      data => data && this.setState({ userList: data.data })
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      typeof this.state.user !== "object" &&
      this.state.user !== prevState.user
    ) {
      getUserIds(this.state.user).then(data => {
        data && this.setState({ user: data });
      });

      getFollowerIds(this.state.user.login).then(data => {
        data && this.setState({ userList: data });
      });
    }
  }

  submitHandler = e => {
    e.preventDefault();
    this.setState({ user: this.state.search });
  };

  handleChanges = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    return (
      <>
        {/* <p>{typeof this.state.userList}</p> */}
        {/* <p>{this.state.user.name}</p> */}
        <div className="medium-container">
          <h1>GitHub Cards</h1>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <h4>User:</h4>

              <form
                style={{ display: "flex", width: "50%" }}
                onSubmit={this.submitHandler}
              >
                <input
                  type="text"
                  name="name"
                  value={this.state.search}
                  onChange={this.handleChanges}
                  placeholder="Search users..."
                />
                <button>Search</button>
              </form>
              <h4>Followers:</h4>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  margin: "10px"
                }}
              >
                {this.state.userList.length > 0 ? (
                  this.state.userList.map((follower, index) => {
                    return <FollowerCard key={index} follower={follower} />;
                  })
                ) : (
                  <h4>Searching for followers...</h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeView;
