import React, { Component } from 'react';
import axios from 'axios';
import "react-router";
import { Link } from 'react-router-dom';

class OnePet extends Component {
    constructor(props) {
        super(props);
        this.state = {
          pet:{
            name: "",
            type: "",
            desc: "",
            skillOne: "",
            skillTwo: "",
            skillThree: "",
            likes: 0,
          },
          errors:{
            name: "",
            type: "",
            desc: "",
            skillOne: "",
            skillTwo: "",
            skillThree: "",
            likes: 0,
          }  
        }
    }
    componentDidMount() {
      console.log("hi from OnePet");
      let _id = this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pets/${_id}`)
            .then(res => {
              this.setState({pet: res.data});
            }) 
            .catch(err => console.log(err));
    }
    Increase = () => {
      console.log('hey from increase')
      let _id = this.props.match.params._id;
      axios.put(`http://localhost:8000/api/pets/${_id}`, {likes:this.state.pet.likes + 1 })
        .then(res => {
          console.log(this.state.pet); 
          this.setState({pet: {...this.state.pet, likes: this.state.pet.likes + 1 } , liked:true});
          localStorage.setItem("likes",this.state.pet._id);
          this.props.history.push("/pets");
        })
        .catch(err => console.log(err));
    }
    delete = (_id, e) => {
      e.preventDefault();
      console.log(this.state.pet.name);
      axios.delete(`http://localhost:8000/api/pets/${_id}`)
        .then(res => this.props.history.push('/'))
        .catch(err => console.log(err));
    }
    render() {
    return (
        <>
          <h2>{this.state.pet.name}</h2>
          <h3>Name: {this.state.pet.name}</h3>
          <p>Type: {this.state.pet.type}</p>
          <p>Description: {this.state.pet.desc}</p>
          <p>1.{this.state.pet.skillOne}</p>
          <p>2.{this.state.pet.skillTwo}</p>
          <p>3.{this.state.pet.skillThree}</p>
          <p>Likes: {this.state.pet.likes} </p>
          <button onClick={this.Increase}>Like!</button>
          &nbsp;
          <button onClick={this.delete.bind(this, this.state.pet._id)}>Adopt!</button>
          <br></br>
          <Link to={"/pets/update/" + this.state.pet._id}>Update Pet Info</Link>
                  
        </>
    );
    }
}

export default OnePet; 