import React from "react";
import './sign-In.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <FormInput
              type="email"
              name="email"
              value={this.state.email}
              handleChange={this.handleChange}
              label="Email"
              required
            />
            <label>Email</label>
          </div>
          <div className="form-group">
            <FormInput
              type="password"
              name="password"
              value={this.state.password}
              handleChange={this.handleChange}
              label="Password"
              required
            />
            <label>Password</label>
          </div>
          <div className="form-group">
            <CustomButton type="submit" value="Submit Form">SIGN IN</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
