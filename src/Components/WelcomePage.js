import React from "react";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedInTest: {},
    };
  }
  findOrCreateUser = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/user",
      };
      const userData = await axios(config);
      console.log("drink", userData.data);
      document.location.href = "/";
    }
  };
  componentDidMount() {
    //redirect to home page using location
    this.findOrCreateUser();
  }
  render() {
    return <></>;
  }
}

export default withAuth0(WelcomePage);
