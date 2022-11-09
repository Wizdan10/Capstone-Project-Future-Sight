import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {FiPlusCircle} from 'react-icons/fi';
import { addNote } from '../../utils/network-data';
import InputNotes from '../AddNewNotes';
import PropTypes from 'prop-types';

function AddButton(){
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function onAddNoteHandler(note){
    addNote(note)
  }

  return (
    <>
    <div className='homepage__action'>
      <Button className='action' onClick={handleShow}>
        <FiPlusCircle size={25}/>
      </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <InputNotes addNote={onAddNoteHandler}/>
      </Modal>
    </>
  )
}

InputNotes.propTypes = {
  addNote: PropTypes.func.isRequired,
}

export default AddButton