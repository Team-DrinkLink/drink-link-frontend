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
      drinkResults: [],
      selectedDrink : {},
      userFavorites: [],
      userLoggedIn: {},
      showModal: false,   

    }
  }

componentDidMount = async ()=> {
  console.log("hello")
}
getDrinks = async () => {

try{
  let PATH = `${process.env.REACT_APP_SERVER_API}s=margarita`;
  let request = await axios.get(PATH);
  this.setState({drinks: request.drinks})
}catch(error){
  console.log("Mounting error - ", error);
}
}
 
//User create functions//////////
handleUserCreate = async (newUserInfo) => {
  console.log ('User Created is:', newUserInfo);
  try {
      const res = await axios.post(`${process.env.REACT_APP_SERVER}`, newUserInfo);
      const createdUser = res.data;
      console.log(res.data);
      this.setState({
          userLoggedIn: createdUser,
      })
  } catch (error) {
      console.log("Error, there is a problem: ", error.response);
  }
}

loginClick = (e) => {
  e.preventDefault();
  this.setState({showModal: true});
}

hideModal =() => {
  this.setState({showModal: false});
}

  render(){
    return(
      <>
      <Router>
        <Header 
        loginClick={this.loginClick}
        hideModal={this.hideModal}/>
        <Routes>
          <Route
            exact path="/"
            element = {<Home
            handleUserCreate={this.handleUserCreate}
            showModal={this.state.showModal}
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
