import React from "react";
import { Card, Container } from "react-bootstrap";
import "../Styles/Cardstyle.scss";
// import { Link } from "react-router-dom";

class AboutUs extends React.Component {
  render() {
  
    return (
      <>
        <Container className="drinkToMake">
          <Card style={{ width: "18rem" }} className="mx-3 my-3">
            <Card.Header as="h1">
              Team DrinkLink
            </Card.Header>
            <Card.Body> Matthew Gebhart <br></br> Sage Jasinski <br></br>Megan Seibert-Hughes <br></br> Diego Sousa 
              {/* <Card.Img src="..src/assets/black.png" /> */}
            </Card.Body>
              <Card.Footer>
                <a href="https://github.com/Team-DrinkLink">Check us out on Github</a></Card.Footer>
          </Card>
        </Container>

      </>
    );
  }
}

export default AboutUs;
