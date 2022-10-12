import React from "react";
import axios from "axios";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./Styles/App.css";
import { withAuth0 } from "@auth0/auth0-react";
import Home from "./Components/Home.js";
import Drink from "./Components/Drink.js";
import Favorites from "./Components/Favorites.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkResults: [],
      selectedDrink: {},
      userFavorites: [],
      userLoggedIn: {},
      searchTerm: "",
      showModal: false,
    };
  }

  componentDidMount() {
    this.getDrinks();
    
  }
  componentDidUpdate() {}

  submitListener = (event) => {
    event.preventDefault();
    let search =
      this.state.searchTerm === ""
        ? ""
        : this.searchDrink(this.state.searchTerm);
    return search;
  };

  searchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  getDrinkFromBackend = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      console.log(jwt);
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/drinks",
      };
      const drinkData = await axios(config);
      console.log("drink", drinkData.data);
    }
  };

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
      console.log("user", userData.data);
    }
  };

  addCocktailToFavorite = async (cocktail) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "post",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/drink/favorite",
        data: {
          cocktail: cocktail,
        },
      };
      const drinkData = await axios(config);
      console.log("success", drinkData.data);
    }
  };

  getFavoriteCocktails = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "get",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/user/favorite",
      };
      const drinkData = await axios(config);
      console.log("success", drinkData.data);
    }
  };

  deleteFavoriteCockTail = async (id) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: "delete",
        baseURL: process.env.REACT_APP_SERVER,
        url: `/drink/favorite/${id}`,
      };
      const drinkData = await axios(config);
      console.log("success", drinkData.data);
    }
  };

  getDrinks = async () => {
    //Sage: sets initial images to be margaritas until search changes the results
    try {
      let PATH = `${process.env.REACT_APP_SERVER_API}s=margarita`;
      // let PATH = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
      let request = await axios.get(PATH);
      // console.log(request.data);
      this.setState({ drinkResults: request.data.drinks });
    } catch (error) {
      console.log("Mounting error - ", error);
    }
  };

  searchDrink = async (term) => {
    try {
      let GRAB = `${process.env.REACT_APP_SERVER_API}s=${term}`;
      let request = await axios.get(GRAB);
      console.log(request.data.drinks);
      this.setState({ drinkResults: request.data.drinks });
    } catch (error) {
      console.log("searching error - ", error);
    }
  };

  handleFavoriteClick = async (drinkInfo) => {
    console.log("drink to favorite is: ", drinkInfo);
    try {
      const url = `${process.env.REACT_APP_SERVER}/model/user/${drinkInfo}`;
      const drinkToFavorite = await axios.put(url, drinkInfo);
      const updatedFavoritesArray = this.state.userFavorites.map(
        (existingDrink) => {
          return existingDrink.idDrink === drinkInfo.idDrink
            ? drinkToFavorite.data
            : existingDrink;
        }
      );
      this.setState({
        userFavorites: updatedFavoritesArray,
      });
    } catch (error) {
      console.log("error updating user favorites: ", error.response);
    }
  };

  setSelectedDrink = (drinkClicked) => {
    this.setState({ selectedDrink: drinkClicked });
    let navigate = useNavigate();
    navigate("/drink");
  };

  render() {
    this.findOrCreateUser();
    return (
      <>
        <Router>
          <Header />
          <button onClick={this.findOrCreateUser}>findOrCreateUser</button>
          <button onClick={()=>this.deleteFavoriteCockTail("6347512ed960f935d19bc306")}>Delete</button>
          <button onClick={this.getFavoriteCocktails}>Get favorites</button>
          <button
            onClick={() =>
              this.addCocktailToFavorite({
                title: "Margarita",
                id: "12121213",
                image:
                  "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
              })
            }
          >
            add
          </button>
          {this.props.auth0.isAuthenticated && (
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home
                    drinkResults={this.state.drinkResults}
                    setSelectedDrink={this.setSelectedDrink}
                    search={this.searchTermChange}
                    submit={this.submitListener}
                  />
                }
              ></Route>

              <Route
                exact
                path="/drink"
                element={
                  <Drink
                    handleFavoriteClick={this.handleFavoriteClick}
                    selectedDrink={this.state.selectedDrink}
                  />
                }
              ></Route>

              <Route exact path="/favorites" element={<Favorites />}></Route>
            </Routes>
          )}

          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
