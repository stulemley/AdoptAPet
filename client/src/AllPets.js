import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
  

class AllPets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res.data);
                this.setState({pets: res.data});
            })
            .catch(err => console.log(err));
    }
    render() {
    return (
        <>
            <h1>All Pets</h1>
            {
                this.state.pets.map( pet =>
                    <fieldset key={pet._id} >
                    <legend><Link to={"/pet/"+ pet._id}><strong>{pet.name}</strong></Link></legend>
                    <p>Type: {pet.type}</p>
                    <p>Description: {pet.desc}</p>
                    <p>Likes: {pet.likes}</p>
                    

                    </fieldset>

                )
            } 
        </>
    );
    }
}

export default AllPets;
