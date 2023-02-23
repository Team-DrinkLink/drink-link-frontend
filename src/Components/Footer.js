import React from "react";
import { Navbar } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Navbar
        className="foot"
        fixed="bottom"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand>
          Diego Sousa &copy; 2022
        </Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
