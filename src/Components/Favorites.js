import React from "react";
import { Container, Card } from "react-bootstrap";

class Favorites extends React.Component {
  render() {
    return (
      <>
        {this.props.userFavorites.length && (
          <Container className="cardDisplay">
            {this.props.userFavorites.map((drink, index) => {
              let newCard = (
                <Card style={{ width: "18rem" }} key={index}>
                  {" "}
                  <Card.Header>{drink.strDrink}</Card.Header>
                  <Card.Body>
                    <Card.Img src={drink.strDrinkThumb} />
                  </Card.Body>
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
