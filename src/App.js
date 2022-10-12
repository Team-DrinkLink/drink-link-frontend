import React from "react";
import axios from "axios";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./Styles/App.css";
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
      ingredient: false,
    };
  }

  componentDidMount() {
    this.getDrinks();
    // console.log(this.state.drinkResults)
  }

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

getDrinks = async () => {
  //Sage: sets initial images to be margaritas until search changes the results
  try{
    let PATH = `${process.env.REACT_APP_SERVER_API}s=margarita`;
    let request = await axios.get(PATH);
    this.setState({drinkResults: request.data.drinks}); 
    
  }catch(error){
    console.log("Mounting error - ", error);
  }
}

searchDrink = async (term) => {
  try {
    if(this.state.ingredient === true){
      console.log("ingredient")
      let GRAB = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`
      let request = await axios.get(GRAB);
      this.setState({drinkResults: request.data.drinks})
    }else{
    let GRAB = `${process.env.REACT_APP_SERVER_API}s=${term}`
    let request = await axios.get(GRAB);
    // console.log(request.data.drinks)
    this.setState({drinkResults: request.data.drinks})
    }
  } catch (error) {
    console.log("searching error - ", error)
  }
}


handleFavoriteClick = async (drinkInfo) => {
  console.log('drink to favorite is: ', drinkInfo);
  try {
    const url = `${process.env.REACT_APP_SERVER}/user/${drinkInfo}`;
    const drinkToFavorite = await axios.put(url, drinkInfo);
    const updatedFavoritesArray = this.state.userFavorites.map(existingDrink => {
      return existingDrink.idDrink === drinkInfo.idDrink ?  drinkToFavorite.data : existingDrink; 
    });
    this.setState({
      userFavorites: updatedFavoritesArray
    })
  } catch (error) {
    console.log('error updating user favorites: ', error.response);
  }
}

ingredientCheck = () =>{
  this.setState({ingredient: !this.state.ingredient})
}

setSelectedDrink = async (drinkClicked) => {
  try{
    let PATH = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkClicked.idDrink}`
    console.log(PATH);
    let request = await axios.get(PATH);
    console.log(request.data.drinks[0]);
    this.setState({selectedDrink: request.data.drinks[0]}); 
  }catch(error){
    console.log("Mounting error - ", error);
  }
}

  render() {
    // console.log(this.state.selectedDrink);
    return (
      <>
      <Router>
        <Header/>
        <Routes>
          <Route
            exact path="/"
            element = {<Home
            drinkResults={this.state.drinkResults}
            setSelectedDrink={this.setSelectedDrink}
            search={this.searchTermChange}
            submit ={this.submitListener}
            inCheck ={() => this.ingredientCheck()}
            />}
            >
            </Route>

            <Route exact path="/drink" element={<Drink 
            handleFavoriteClick={this.handleFavoriteClick}
            selectedDrink={this.state.selectedDrink}
            setSelectedDrink={this.setSelectedDrink}
npm start            />}></Route>

            <Route
              exact
              path="/favorites"
              element={<Favorites userFavorites={this.state.userFavorites} />}
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
