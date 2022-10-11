import React from 'react';
import {Modal, Form, Button} from 'react-bootstrap';

class UserLoginModal extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleUserCreate({
            username: e.target.username.value,
            email: e.target.email.value,
            status: e.target.status.checked,
        });
    }
    

    render() {
        return (
            <>
            <Modal 
            show={this.props.showModal}
            onHide={this.props.hideModal} 
            centered 
            size='lg'>
            <Modal.Header closeButton>
                <Modal.Title>
                    "Login"
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="status">
                        <Form.Check type="checkbox" label="Create New User" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username" />
                        <Form.Text className="text-muted"></Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="email" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            </Modal>
            </>

        )



    }
}

export default UserLoginModal;