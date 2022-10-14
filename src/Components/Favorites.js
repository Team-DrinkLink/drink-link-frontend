import React from "react";
import { Container, Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

class Favorites extends React.Component {


componentDidMount() {
  this.props.getFavoriteCocktails(); 
}

  render() {
    return (
      <>
        {this.props.userFavorites.length && (
          <Container className="cardDisplay">
            {this.props.userFavorites.map((drink, index) => {
              let newCard = (
                <Card style={{ width: "18rem" }} key={index} onClick={() => this.props.setSelectedDrink(drink)}>
                  {" "}
                  <Card.Header>{drink.title}</Card.Header>
                  <Link to='/drink'>
                  <Card.Body>
                    <Card.Img src={drink.image} />
                  </Card.Body>
                  </Link>
                  <Button onClick={() => this.props.deleteFavoriteCockTail(drink._id)}
                    variant="secondary" type="submit" className='favorite'>
                    Delete from Favorites
                </Button>
                </Card>
              );

              return newCard;
            })}
          </Container>
        )}
      </>
    );
  }
}

export default Favorites;
