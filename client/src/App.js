import React, { Component } from 'react';
import './App.css';
import "react-router";
import AllPets from "./AllPets";
import NewPet from "./NewPet";
import OnePet from "./OnePet";
import UpdatePet from "./UpdatePet";
import {
  BrowserRouter,
  Route,
  Link 
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <>
      <div>
        <h1>Adopt a Pet!</h1>
      </div>
        <BrowserRouter>  
          &nbsp;
          &nbsp;
          <Link to="/pets">All Pets</Link>
          &nbsp;
          &nbsp;
          <Link to="/new">New Pet</Link>

          <Route exact path="/pets" component={AllPets} />
          <Route path="/new" component={NewPet} />
          <Route path="/pet/:_id" component={OnePet} /> 
          <Route path="/pets/update/:_id" component={UpdatePet} />     
       </BrowserRouter>      </>
    );
  }
  
}

export default App;
