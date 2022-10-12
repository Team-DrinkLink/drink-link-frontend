
import React from "react";
import { Form, Container, Button, Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import UserLoginModal from './UserLoginModal';

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
                <Form.Check type="checkbox" label="search by ingredient" />
              </Form.Group>
              <Form.Group controlId="non-alcoholic">
                <Form.Check type="checkbox" label="non-alcoholic" />
              </Form.Group>
            </div>
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
                <UserLoginModal
                    showModal={this.props.showModal}
                    hideModal={this.props.hideModal}
                    handleUserCreate={this.handleUserCreate}
                    />

      </>
        )

    }
}

export default Home;
