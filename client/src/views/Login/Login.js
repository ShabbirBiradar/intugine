import React, { Component } from "react";
import { connect } from "react-redux";
import { AuthSetup } from "../../actions/auth";
import "./login.scss";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: "",
      formData: {
        email: "",
        password: ""
      }
    };
  }

  componentDidMount() {
    if (this.props.auth.token) {
      this.props.history.push("/dashboard");
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { authStatus } = this.props.auth;
      if (authStatus.token) {
        window.location = "/dashboard";
      }
      if (authStatus.error) {
        this.setState({ errorMsg: authStatus.error.data.message });
      }
    }
  }

  _handleChangeField = event => {
    const { name, value } = event.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value
      },
      errorMsg: ""
    });
  };

  submitForm = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    dispatch(AuthSetup(this.state.formData));
  };

  render() {
    const { formData } = this.state;
    return (
      <div className="root">
        <div className="login-root">
          <h2>LOGIN</h2>
          <form onSubmit={this.submitForm}>
            <p className="errorMsg">{this.state.errorMsg}</p>
            <div className="form-controller">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={this._handleChangeField}
                required
              />
            </div>
            <div className="form-controller">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={this._handleChangeField}
                required
              />
            </div>
            <div className="form-controller">
              <input type="submit" value="LOGIN" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Login);
