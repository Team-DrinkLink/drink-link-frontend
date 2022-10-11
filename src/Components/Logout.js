import React from "react";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  function handleLogout() {
    logout({ returnTo: window.location.origin });
  }

  return (
    isAuthenticated && (
      <NavItem>
        <Link
          to="/"
          className="nav-link"
          style={{ color: "white" }}
          onClick={handleLogout}
        >
          Log out
        </Link>
      </NavItem>
    )
  );
}

export default LogoutButton;
