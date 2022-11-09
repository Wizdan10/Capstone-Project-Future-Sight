import React from "react";
import Button from 'react-bootstrap/Button';
import PropTypes from "prop-types";

function DeleteButton({id, onDelete}){
    return(
        <Button variant="danger" className="note-item__delete-button"
        onClick={()=>{
            onDelete(id);
        }}>Delete</Button>
    )
    
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton