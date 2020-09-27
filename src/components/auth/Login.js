import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "sam",
    password: "pass"
  };
  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = "http://localhost:4000/api/auth/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        // console.log("RESPONSE = ", res.data);
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push('/users');
      })
      .catch(error => {
        console.log("error.response = ", error.response);
      });
  };
  render() {
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">username</label>
            <input
              id="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
              placeholder="username"
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
              placeholder="password"
            />
          </div>
          <div>
            <label className="hidden" htmlFor="btn">btn label</label>
            <div className="btn-container">
              <button id="btn" type="submit">Login</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Login;
