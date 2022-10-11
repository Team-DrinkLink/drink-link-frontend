import React from 'react';
import {Form, Container, Button, Card} from 'react-bootstrap';


class Home extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group className="mb-3" controlId="mainSearch">
                            <Form.Label>Search</Form.Label>
                            <Form.Control type="text" placeholder="Drink" />
                            <Form.Text className="text-muted"></Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="searchbyingredient">
                            <Form.Check type="checkbox" label="search by ingredient" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="non-alcoholic">
                            <Form.Check type="checkbox" label="non-alcoholic" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
                <Container>
                  
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Drink #1</Card.Header>
                        <Card.Body>
                            <Card.Img src="https://via.placeholder.com/150" />
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Drink #1</Card.Header>
                        <Card.Body>
                            <Card.Img src="https://via.placeholder.com/150" />
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Drink #1</Card.Header>
                        <Card.Body>
                            <Card.Img src="https://via.placeholder.com/150" />
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Drink #1</Card.Header>
                        <Card.Body>
                            <Card.Img src="https://via.placeholder.com/150" />
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>Drink #1</Card.Header>
                        <Card.Body>
                            <Card.Img src="https://via.placeholder.com/150" />
                        </Card.Body>
                    </Card>
                 
                </Container>

            </>
        )


    }
}

export default Home;