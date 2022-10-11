import React from 'react';
import axios from 'axios';
import './Styles/App.scss'
// import dotenv from 'dotenv'
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home.js'
import Drink from './Components/Drink.js';
import Favorites from './Components/Favorites.js';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      drinkResults: [],
      selectedDrink : {},
      userFavorites: [],
      userLoggedIn: {},  

    }
  }

componentDidMount() {
  this.getDrinks()
  // console.log(this.state.drinkResults)
}

getDrinks = async () => {
  //Sage: sets initial images to be margaritas until search changes the results
  try{
    // let PATH = `${process.env.REACT_APP_SERVER_API}s=margarita`;
    let PATH = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
    let request = await axios.get(PATH);
    console.log(request.data);
    this.setState({drinkResults: request.data.drinks}); 
  }catch(error){
    console.log("Mounting error - ", error);
  }
}
 

  render(){
    return(
      <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact path="/"
            element = {<Home
            drinkResults={this.state.drinkResults}
            />}
            >
            </Route>

            <Route
            exact path ="/drink"
            element={<Drink/>}
            >
            </Route>

            <Route
              exact path="/favorites"
              element={<Favorites/>}
              >
              </Route>
         </Routes>
         <Footer />
      </Router>
      
      </>
    );
  }
}

export default App;
