import React from "react";

class FollowerCard extends React.Component {
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
          <h3>{this.props.follower.login}</h3>
          <a href={this.props.follower.html_url}>View Profile</a>
        </div>
      </>
    );
  }
}

export default FollowerCard;
