import React from 'react';
import axios from 'axios';
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
  constructor(props){
    super(props);
    this.state = {
      drinks: {},
    }
  }

componentDidMount = async ()=> {
  try{
    let PATH = `${process.env.REACT_APP_SERVER_API}s=margarita`;
    let request = await axios.get(PATH);
    this.setState({drinks: request.drinks})
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
