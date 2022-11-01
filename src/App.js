import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <h1 className='text-center mt-5'>Hallo Guys!</h1>
    <div className='d-flex justify-content-center'>
    <Button variant="primary" onClick={handleShow}>
      Tes Interaktif Bootstrap
    </Button><Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Halo Guys</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ini Starter Project Kita yaa!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Tutup
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok Mas
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      </>
  );
}

export default App;
