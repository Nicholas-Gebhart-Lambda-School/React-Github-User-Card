import React from "react";

class UserCard extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.user.login}</h2>
        <p>UserName</p>
      </>
    );
  }
}

export default UserCard;
