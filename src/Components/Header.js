import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/App.scss";
import AuthButtons from "./AuthButtons";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Welcome to DrinkLink</Navbar.Brand>

        <div class="NavItems">
          <NavItem>
            <Link to="/" className="nav-link" style={{ color: "white" }}>
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link
              to="/favorites"
              className="nav-link"
              style={{ color: "white" }}
            >
              Favorites
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/" className="nav-link" style={{ color: "white" }}>
              Login
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/" className="nav-link" style={{ color: "white" }}>
              Logout
            </Link>
          </NavItem>
        </div>
      </Navbar>
    );
  }
}

export default Header;
