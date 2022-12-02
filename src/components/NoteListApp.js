import React from "react";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteListApp({notes}){
    return(
        <Container >
            <Row className="justify-content-center note-card">
            {
                notes.map((note)=>(
                    <NoteItem 
                    key={note.id} 
                    {...note}
                    />
                )
                )
            }
            </Row>
         </Container>
    )
}

NoteListApp.propTypes={
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NoteListApp;