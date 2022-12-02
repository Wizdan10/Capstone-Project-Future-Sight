import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Register from "./Register";
import { register } from "../utils/network-data";
import Modal from "react-bootstrap/Modal";

function RegisterTemplate() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      alert("Register Berhasil");
      window.location.reload()
    }
  }
  return (
    <React.Fragment>
      <Button variant="light" className="mx-2 bordered" onClick={handleShow}>
        Register
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Register register={onRegisterHandler}/>
      </Modal>
    </React.Fragment>
  );
}

export default RegisterTemplate;
