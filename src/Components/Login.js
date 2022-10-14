import React from "react";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import '../Styles/Cardstyle.scss'

function Login() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  function handleLogin() {
    loginWithRedirect();
  }

  return (
    !isAuthenticated && (
      <NavItem>
        <Link
          to="/"
          className="nav-link"
          onClick={handleLogin}
        >
          Log in
        </Link>
      </NavItem>
    )
  );
}
export default Login;
