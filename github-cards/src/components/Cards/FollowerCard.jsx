import React from "react";

class FollowerCard extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            padding: "10px",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "7px",
            textAlign: "center",
            width: "30%",
            margin: "20px auto 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2>{this.props.follower.login}</h2>
          {/* <p>{JSON.stringify(this.props.follower)}</p> */}
          <a href={this.props.follower.html_url}>
            <img
              style={{ maxWidth: "50%", marginBottom: "15px" }}
              src={this.props.follower.avatar_url}
              alt="avatar"
            />
          </a>
          <a href={this.props.follower.html_url}>View Profile</a>
        </div>
      </>
    );
  }
}

export default FollowerCard;
