import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import PropTypes from "prop-types";
import DeleteButton from "./button/ButtonDelete";
import { showFormattedDate } from "../utils/ShowFormattedDate";
import { deleteNote } from "../utils/network-data";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";


function NoteItem({id, title, createdAt, body}){
    const date = showFormattedDate(createdAt);

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function onDeleteHandler(id){
        await deleteNote(id);
    }
    return(
        <>
        <Card bg="secondary" text="white" className="card m-3" style={{ width: '23rem' }}>
                <Card.Title className="mt-3"><Link onClick={handleShow} className="text-white note-item__title">{title}</Link></Card.Title>
                <hr/>
            <Card.Body>
                <Card.Text>
                    {date}
                </Card.Text>
                <Card.Text className="note-item__body">
                {body}
                </Card.Text>
                <div className="button__action">
                    <DeleteButton id={id} onDelete={onDeleteHandler}/>
                </div>
            </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="modalColor">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p className="text-dark">{date}</p>
        <p className="text-dark">{body}</p>
        </Modal.Body>
        </Modal>
        
        </>
    )
}
NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default NoteItem;