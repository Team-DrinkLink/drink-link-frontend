import React from "react";
import { Form, Container, Button, Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
// import '../Styles/Cardstyle.scss';

class Home extends React.Component {

    render() {
        return (
            <>
              <Container className="homeContainer">
                <Form className="form" onSubmit={this.props.submit}>
                  <Form.Group className="mb-3" controlId="mainSearch">
                    <InputGroup className="mb-3">
                      <Button variant="primary" type="submit">
                              Search
                      </Button>
                      <Form.Control type="text" placeholder="Drink" onChange={this.props.search}/>
                    </InputGroup>
                          <Form.Text className="text-muted"></Form.Text>
                      </Form.Group>
                        <div className="FilteredOptions">
                          <Form.Group controlId="searchbyingredient">
                            <Form.Check type="checkbox" label="search by ingredient" onChange={this.props.inCheck}/>
                          </Form.Group>
                          <Form.Group controlId="non-alcoholic">
                            <Form.Check type="checkbox" label="non-alcoholic" onChange={this.props.alcCheck} />
                          </Form.Group>
                        </div>
                      </Form>
              </Container>

                  {this.props.drinkResults.length &&
                <Container className='cardDisplay'>

                    {this.props.drinkResults.map((drink,index) =>{
                      
                        let newCard = <Card style={{ width: '18rem' }} key={index} onClick={() => this.props.setSelectedDrink(drink)}> 
                        <Card.Header>{drink.strDrink}</Card.Header>
                        <Link to='/drink'>
                        <Card.Body>
                        <Card.Img src={drink.strDrinkThumb}/>
                        </Card.Body>
                        </Link>
                        </Card>
                        
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
