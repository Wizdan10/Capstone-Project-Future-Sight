import React from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

class InputNotes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:'',
        }
        this.onTitleChangeEventhandler = this.onTitleChangeEventhandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }
    

    onTitleChangeEventhandler=(event)=>{
        this.setState(()=>{
            return{
                title: event.target.value,
            }
        })
    }

    onBodyChangeEventHandler = (event) =>{
        this.setState(()=>{
            return{
                body: event.target.value,
            }
        })
    }
    
    onSubmitEventHandler = (event) =>{
        event.preventDefault();
        this.props.addNote(this.state)
        window.location.reload();
    }
    

    render(){
        return(
            <React.Fragment>
            <Modal.Header closeButton>
          <Modal.Title className="text-dark">Add Note</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-dark">Title</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Input Title..."
                    autoFocus
                    required
                    onChange={this.onTitleChangeEventhandler}
                />
                </Form.Group>
                <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
                >
                <Form.Label className="text-dark">Description</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={this.onBodyChangeEventHandler} required/>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button id="SubmitNote" variant="primary" onClick={this.onSubmitEventHandler}>
                Submit
            </Button>
            </Modal.Footer>
        </React.Fragment>
        )
    }
}

InputNotes.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default InputNotes