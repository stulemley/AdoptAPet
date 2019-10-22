import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class NewPets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pet: {
            name: "",
            type: "",
            desc: "",
            skillOne: "",
            skillTwo: "",
            skillThree: "",
            likes: 0,

      },
      errors: {
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

  addPet = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post("http://localhost:8000/api/new", this.state.pet)
      .then(res => {
        console.log(res);
        if(res.data.errors) {
          console.log(res.data.errors);
          this.setState({errors: res.data.errors});
        } else {
          this.props.history.push("/pets");
        }
      })
      .catch(err => { 
          console.log(err);
      });
  }

  changeName = e => {
    let pet = {...this.state.pet};
    pet.name = e.target.value;
    this.setState({pet: pet});  
  }
  changeType = e => {
    let pet = {...this.state.pet};
        pet.type = e.target.value;
        this.setState({pet: pet});  
  }

  changeDesc = e => {
    let pet = {...this.state.pet};
    pet.desc = e.target.value;
    this.setState({pet: pet}); 
  }
  changeSkillOne = e => {
    let pet = {...this.state.pet};
    pet.skillOne = e.target.value;
    this.setState({pet: pet});  
  }
  changeSkillTwo = e => {
    let pet = {...this.state.pet};
    pet.skillTwo = e.target.value;
    this.setState({pet: pet});  
}
  changeSkillThree = e => {
    let pet = {...this.state.pet};
    pet.skillThree = e.target.value;
    this.setState({pet: pet});  
}

  render() {
    return (
      <>
        <h1>New Pet</h1>
        <form onSubmit={this.addPet}>
          <input 
            type="text" 
            placeholder="Pet Name" 
            onChange={this.changeName}
          />
          {
                this.state.errors.name ?
                <span>{this.state.errors.name.message}</span> :
                ""
            }
          <br/>
          <input 
            type="text" 
            placeholder="Pet Type" 
            onChange={this.changeType}
          />
          {
                this.state.errors.type ?
                <span>{this.state.errors.type.message}</span> :
                ""
            }
          <br/>
          <input 
            type="text" 
            placeholder="Pet Description" 
            onChange={this.changeDesc}  
          />
          {
                this.state.errors.desc ?
                <span>{this.state.errors.desc.message}</span> :
                ""
            }
          <input 
            type="text" 
            placeholder="Skill 1:" 
            onChange={this.changeSkillOne}
          />
          {
                this.state.errors.skillOne ?
                <span>{this.state.errors.skillOne.message}</span> :
                ""
            }
          <input 
            type="text" 
            placeholder="Skill 2:" 
            onChange={this.changeSkillTwo}
          />
          {
                this.state.errors.skillTwo ?
                <span>{this.state.errors.skillTwo.message}</span> :
                ""
            }
          <input 
            type="text" 
            placeholder="Skill 3:" 
            onChange={this.changeSkillThree}
          />
          {
                this.state.errors.skillThree ?
                <span>{this.state.errors.skillThree.message}</span> :
                ""
            }
          <br/>
          <br/>
          <br/>
          <br/>
          <input type="submit" value="Create" />
        </form>
      </>
    );
  }
}

export default NewPets;