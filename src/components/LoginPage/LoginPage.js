import React, { Component } from "react";
import SmoothieContext from "../../contexts/SmoothieContext";
import "./LoginPage.css";
import AuthApiService from "../../services/auth-api-service";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedLogIn: false,
    };
  }

  static contextType = SmoothieContext;

  onLogin = (event) => {
    event.preventDefault();
    const user_name = event.target.user_name.value;
    const password = event.target.password.value;
    this.setState({ clickedLogIn: true });
    AuthApiService.getUsers().then((users) => {
      const userLog = users.filter(
        (u) => u.user_name === user_name && u.password === password
      );
      const user = userLog[0];
      if (!user) {
        alert("incorrect username or password");
      } else {
        this.context.logIn(user);
        this.props.history.push(`/home`);
      }
    });
  };

  render() {
    return (
      <div className="LoginPage">
        <main className="LoginPage__Main">
          {this.props.clickedLogIn ? (
            <div className="Logging_In">
              <h3>logging in...</h3>
            </div>
          ) : (
            <>
              <h1>Login</h1>
              <form onSubmit={this.onLogin}>
                <label htmlFor="username">username</label>
                <br />
                <input type="text" name="user_name" id="user_name" required />
                <br />
                <label htmlFor="password">password</label>
                <br />
                <input type="password" name="password" id="password" required />
                <br />
                <br />
                <button>submit</button>
              </form>
            </>
          )}
        </main>
      </div>
    );
  }
}

export default LoginPage;
