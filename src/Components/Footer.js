import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

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
          Team DrinkLink &copy; 2022   Sage   Megan   Diego   Matthew
        </Navbar.Brand>
        <NavItem>
            <Link to="/aboutus" className="nav-link" style={{ color: "white" }}>
              About us
            </Link>
          </NavItem>
      </Navbar>
    );
  }
}

export default Footer;
