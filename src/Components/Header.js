import React from "react";
import "../Styles/App.scss";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends React.Component {
  render() {
    return (
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Welcome to DrinkLink</Navbar.Brand>

        <div className="NavItems">
        <NavItem>
          <Link to="/" className="nav-link" style={{ color: "white" }}>
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/favorites" className="nav-link" style={{ color: "white" }}>
            Favorites
          </Link>
        </NavItem>
        <AuthButtons />
        </div>
      </Navbar>
    );
  }
}

export default Header;