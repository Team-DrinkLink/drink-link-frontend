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

                  {this.props.drinkResults.length &&

                <Container className='cardDisplay'>

                    {this.props.drinkResults.map((drink,index) =>{
                        
                        let newCard = <Card style={{ width: '18rem' }} key={index}> <Card.Header>{drink.strDrink}</Card.Header><Card.Body><Card.Img src={drink.strDrinkThumb}/></Card.Body></Card>

                        return newCard
                    
                        })
                    }
                </Container>
                    }

            </>
        )


    }
}

export default Home;