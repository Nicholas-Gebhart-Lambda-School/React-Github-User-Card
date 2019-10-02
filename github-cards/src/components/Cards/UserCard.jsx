import React from "react";

import axios from "axios";

class App extends React.Component {
  state = {
    myData: {},
    followers: []
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/Chrismis79")
      .then(res => {
        console.log("This is res:", res);
        this.setState({
          myData: res.data.avatar_url
        });
      })
      .catch(error =>
        alert("There was a problem fetching requested data", error)
      );
    axios.get("https://api.github.com/users/Chrismis79/followers").then(res => {
      console.log("This is followers res", res.data);
      this.setState({
        followers: res.data
      });
    });
  }

  render() {
    return (
      <>
        <header className="header">
          <p>
            <span role="img" aria-label="red heart">
              ❤️
            </span>
            's
          </p>
        </header>
        <div className="card">
          <div className="card-info">
            {this.state.avatar_url}

            {/* {this.state.followers.map(user => <img src={user.myData} key={user.myData} alt={user.myData}/>)} */}
          </div>
        </div>
      </>
    );
  }
}

export default App;
