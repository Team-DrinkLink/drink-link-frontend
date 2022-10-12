import React from "react";
import Navbar from "react-bootstrap/Navbar";

class Footer extends React.Component {
  render() {
    return (
      <Navbar
        fixed="bottom"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand>
          Team DrinkLink &copy; 2022 Sage Megan Diego Matthew
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
