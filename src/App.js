import React from 'react';
// import axios from 'axios';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Components/Home.js'
import Drink from './Components/Drink.js';
import Favorites from './Components/Favorites.js';

class App extends React.Component{
  render(){
    return(
      <>
      <Router>
        <Header />
        <Routes>
          <Route
            exact path="/"
            element = {<Home/>}
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
