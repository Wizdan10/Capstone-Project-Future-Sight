import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { login } from "../../src/utils/network-data";
import Login from "./Login";


function LoginTemplate({ loginSuccess }) {
  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });

    if (password !== data) {
      if(!error){
          loginSuccess(data)
          alert("Berhasil")
      }
  }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <React.Fragment>
      <Button variant="dark" onClick={handleShow}>
        Masuk
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Login login={onLoginHandler} />
      </Modal>
    </React.Fragment>
  );
}
export default LoginTemplate;
