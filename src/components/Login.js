import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChangeHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Modal.Header closeButton>
          <Modal.Title className="modalColor">Masuk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="modalColor">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={this.state.email}
                autoFocus
                onChange={this.onEmailChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modalColor">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.onPasswordChangeHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.onSubmitHandler}>
            Masuk
          </Button>
        </Modal.Footer>
      </React.Fragment>
    );
  }
}
Login.propTypes = {
  login: PropTypes.func,
};
export default Login;
