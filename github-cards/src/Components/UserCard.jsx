import React from "react";

class UserCard extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "10px"
          }}
        >
          <h2>{this.props.user.name}</h2>
          <p>{this.props.user.bio}</p>
          <a href={this.props.user.html_url}>View Profile</a>
        </div>
      </>
    );
  }
}

export default UserCard;
