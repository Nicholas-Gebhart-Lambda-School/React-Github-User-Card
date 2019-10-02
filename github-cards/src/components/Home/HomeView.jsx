import React from "react";
import { getUserIds, getFollowerIds } from "../../services/gitApi";

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
      data => data && this.setState({ userList: data })
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
        <p>{this.state.user.name}</p>
        <div className="small-container">
          <h1>GitHub Cards</h1>
          <div className="flex-row">
            <div className="flex-large">
              <form onSubmit={this.submitHandler}>
                <label htmlFor="name">Find User</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.search}
                  onChange={this.handleChanges}
                />
                <button className="button muted-button">Search</button>
              </form>
              <div>
                <h4>User:</h4>
              </div>
              <div>
                <h4>Followers:</h4>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeView;
