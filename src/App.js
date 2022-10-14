import React from "react";
import axios from "axios";
// import './Styles/App.scss';
// import './Styles/Cardstyle.scss'
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import Home from "./Components/Home.js";
import Drink from "./Components/Drink.js";
import Favorites from "./Components/Favorites.js";
import Login from "./Components/Login.js";
import { Toast } from "react-bootstrap";
import ToastContainer from "react-bootstrap/ToastContainer";
import WelcomePage from "./Components/WelcomePage.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinkResults: [],
      selectedDrink: {},
      userFavorites: [],
      userLoggedIn: {},
      searchTerm: "",
      ingredient: false,
      alcoholic: true,
      showDeletedToast: false,
      showFavoriteToast: false,
      findUserFromBackend: {},
      getDrinkFromBackend: {},
      deletedFromBackend: {},
      favoriteMessage: {},
    };
  }

  componentDidMount() {
    this.getDrinks();
  }
  deletedToast = () => {
    this.setState({
      showDeletedToast: true,
    });
    setTimeout(() => {
      this.setState({
        showDeletedToast: false,
      });
    }, 3000);
  };

  addedToFavoritesToast = () => {
    this.setState({
      showFavoriteToast: true,
    });
    setTimeout(() => {
      this.setState({
        showFavoriteToast: false,
      });
    }, 3000);
  };

  submitListener = (event) => {
    event.preventDefault();
    let search =
      this.state.searchTerm === "" ? (
        <p>Oh no looks like you spilled</p>
      ) : (
        this.searchDrink(this.state.searchTerm)
      );
    return search;
  };

  searchTermChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  searchDrink = async (term) => {
    try {
      if (this.state.ingredient === true) {
        let GRAB = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`;
        let request = await axios.get(GRAB);
        this.setState({ drinkResults: request.data.drinks });
      } else if (this.state.alcoholic === false) {
        let PATH = `${process.env.REACT_APP_SERVER_API}s=${term}`;
        let request = await axios.get(PATH);
        // console.log(request.data.drinks);
        let filtered = request.data.drinks.filter(
          (value) => value.strAlcoholic === "Non alcoholic"
        );
        this.setState({ drinkResults: filtered });
      } else {
        let GRAB = `${process.env.REACT_APP_SERVER_API}s=${term}`;
        let request = await axios.get(GRAB);
        // console.log(request.data.drinks)
        this.setState({ drinkResults: request.data.drinks });
      }
    } catch (error) {
      console.log("searching error - ", error);
    }
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
      this.setState({
        getDrinkFromBackend: drinkData.data,
      });
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
      this.addedToFavoritesToast();
      const drinkData = await axios(config);
      this.setState({
        favoriteMessage: drinkData.data.message,
      });
    }
  };

  getFavoriteCocktails = async () => {
    try {
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
        this.setState({ userFavorites: drinkData.data });
      }
    } catch (error) {
      console.log(error);
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
      this.getFavoriteCocktails();
      this.deletedToast();
      this.setState({
        deletedFromBackend: drinkData.data,
      });
    }
  };

  getDrinks = async () => {
    //Sage: sets initial images to be margaritas until search changes the results
    try {
      let PATH = `${process.env.REACT_APP_SERVER_API}s=margarita`;
      let request = await axios.get(PATH);
      this.setState({ drinkResults: request.data.drinks });
    } catch (error) {
      console.log("Mounting error - ", error);
    }
  };

  ingredientCheck = () => {
    this.setState({ ingredient: !this.state.ingredient });
  };

  alcCheckHandler = () => {
    this.setState({ alcoholic: !this.state.alcoholic });
  };

  setSelectedDrink = async (drinkClicked) => {
    try {
      let PATH = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkClicked.idDrink}`;
      let request = await axios.get(PATH);
      this.setState({ selectedDrink: request.data.drinks[0] });
    } catch (error) {
      console.log("Mounting error - ", error);
    }
    try {
      let PATH = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkClicked.id}`;
      let request = await axios.get(PATH);
      this.setState({ selectedDrink: request.data.drinks[0] });
    } catch (error) {
      console.log("Mounting error - ", error);
    }
  };

  render() {
    return (
      <>
        <Router>
          <ToastContainer className="position-fixed " position="top-center">
            <Toast
              className="ml-5 mt-3"
              bg="danger"
              show={this.state.showDeletedToast}
            >
              <Toast.Header>
                <strong className="mr-auto ">Deleted</strong>
              </Toast.Header>
              <Toast.Body>Deleted from favorites</Toast.Body>
            </Toast>
          </ToastContainer>
          <ToastContainer className="position-fixed" position="top-center">
            <Toast
              className="ml-5 mt-3"
              bg="success"
              show={this.state.showFavoriteToast}
            >
              <Toast.Header>
                <strong className="mr-auto ">Succes</strong>
              </Toast.Header>
              <Toast.Body>Drink Added To Favorites!</Toast.Body>
            </Toast>
          </ToastContainer>
          <Header />
          {this.props.auth0.isAuthenticated ? (
            <Routes>
                <Route path="/welcome" element={<WelcomePage />}></Route>
              <Route
                exact
                path="/"
                element={
                  <Home
                    drinkResults={this.state.drinkResults}
                    setSelectedDrink={this.setSelectedDrink}
                    search={this.searchTermChange}
                    submit={this.submitListener}
                    inCheck={() => this.ingredientCheck()}
                    alcCheck={() => this.alcCheckHandler()}
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
                    setSelectedDrink={this.setSelectedDrink}
                    addCocktailToFavorite={this.addCocktailToFavorite}
                  />
                }
              ></Route>

              <Route
                exact
                path="/favorites"
                element={
                  <Favorites
                    userFavorites={this.state.userFavorites}
                    drinkResults={this.state.drinkResults}
                    getFavoriteCocktails={this.getFavoriteCocktails}
                    deleteFavoriteCockTail={this.deleteFavoriteCockTail}
                    setSelectedDrink={this.setSelectedDrink}
                  />
                }
              ></Route>
            </Routes>
          ) : (
            <>
              <div className="openingMessage">
                <h1>Please log in</h1>
                <Login></Login>
              </div>
            </>
          )}
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
