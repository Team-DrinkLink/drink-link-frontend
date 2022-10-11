import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      drinks: {},
    }
  }

componentDidMount = async ()=> {
  console.log("hello")
  try{
    let PATH = `${process.env.REACT_APP_SERVER_API}s=margarita`;
    let request = await axios.get(PATH);
    this.setState({drinks: request.drinks})
  }catch(error){
    console.log("Mounting error - ", error);
  }

  // searchTerm = async (search) => {
  //   let FIND = `${process.env.REACT_APP_SERVER_API}s={}`
  // }
}


  render(){
    return(
      <>
      </>
    );
  }
}

export default App;
