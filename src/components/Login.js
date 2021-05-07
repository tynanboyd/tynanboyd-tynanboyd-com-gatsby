import React from "react";
import { navigate } from "gatsby";
import { handleLogin, isLoggedIn } from "../services/auth";
import styled from "styled-components";

const LoginStyles = styled.form`
  display: flex;
  flex-direction: column;

  input {
    max-width: 250px;
  }
`;

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  };
  handleUpdate = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(this.state);
  };
  render() {
    if (isLoggedIn()) {
      navigate(`/bookclub/profile`);
    }
    return (
      <>
        <h1>No dead white men bookclub</h1>
        <LoginStyles
          method="post"
          onSubmit={(event) => {
            this.handleSubmit(event);
            navigate(`/bookclub/profile`);
          }}
        >
          <label>
            Username
            <input type="text" name="username" onChange={this.handleUpdate} />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
            />
          </label>
          <input type="submit" value="Log In" />
        </LoginStyles>
      </>
    );
  }
}
export default Login;
