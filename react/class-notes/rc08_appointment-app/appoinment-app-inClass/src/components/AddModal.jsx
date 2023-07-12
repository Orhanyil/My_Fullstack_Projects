import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddModal({show, handleClose}) {
  

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for ...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Patient Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="Date" />
      </Form.Group>
      <div className='text-center'>
      <Button variant="success" type="submit">
        Save
      </Button>
      <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
      </div>
      
            </Form>
        </Modal.Body>
    </Modal>
    </>
  );
}

export default AddModal;