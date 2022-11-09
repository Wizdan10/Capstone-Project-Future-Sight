import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onNameChange(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onEmailChange(event) {
    this.setState(() => {
      return {
        email: event.target.value,
      };
    });
  }

  onPasswordChange(event) {
    this.setState(() => {
      return {
        password: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }
  render() {
    return (
      <React.Fragment>
        <Modal.Header closeButton>
          <Modal.Title className="modalColor">Daftar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="modalColor">Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                value={this.state.name}
                autoFocus
                onChange={this.onNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modalColor">Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                autoFocus
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="modalColor">Password</Form.Label>
              <Form.Control
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.onSubmitHandler}>
            Daftar
          </Button>
        </Modal.Footer>
      </React.Fragment>
    );
  }
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
};
export default Register;
