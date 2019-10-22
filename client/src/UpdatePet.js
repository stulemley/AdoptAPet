import React, { Component } from 'react';
import axios from 'axios';
import "./App.css";
import "react-router";

class UpdatePet extends Component {
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
                likes: 0
            },
            errors: {
                    name: "",
                    type: "",
                    desc: "",
                    skillOne: "",
                    skillTwo: "",
                    skillThree: "",
                    likes: "",
            }
        }
    }

    componentDidMount() {
        let _id = this.props.match.params._id;
        axios.get(`http://localhost:8000/api/pets/${_id}`)
        .then(res => {this.setState({pet: res.data});
        })
        .catch(err => console.log(err));
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
    updatePet = e => {
        e.preventDefault();
        
        let _id = this.props.match.params._id;
        axios.put(`http://localhost:8000/api/pets/${_id}`, this.state.pet)
            .then(res => {
                console.log("res is", res);
            if(res.data.errors) {
                console.log(res);
                this.setState({errors: res.data.errors});
            } else {
            this.props.history.push(`/pets`)
            }
        })
        .catch(err => console.log(err)); 
    }

    render() {
    return (
        <form onSubmit={this.updatePet}>
            <input 
                type="text" 
                placeholder="Name" 
                value={this.state.pet.name}
                onChange={this.changeName } 
                 
            />
            {
                this.state.errors.name ?
                <span>{this.state.errors.name.message}</span> :
                ""
            }
            <br/>
            <input 
                type="text" 
                placeholder="Type" 
                value={this.state.pet.type}
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
                placeholder="Description" 
                value={this.state.pet.desc}
                onChange={this.changeDesc} 
                
            />
            {
                this.state.errors.desc ?
                <span>{this.state.errors.desc.message}</span> :
                ""
            }
            <br/>
            <input 
                type="text" 
                placeholder="Skill One" 
                onChange={this.changeSkillOne} 
                value={this.state.pet.skillOne}
            />
            {
                this.state.errors.skillOne ?
                <span>{this.state.errors.skillOne.message}</span> :
                ""
            }
            <br/>
            <input 
                type="text" 
                placeholder="Skill Two" 
                onChange={this.changeSkillTwo} 
                value={this.state.pet.skillTwo}
            />
            {
                this.state.errors.skillTwo ?
                <span>{this.state.errors.skillTwo.message}</span> :
                ""
            }
            <br/>
            <input 
                type="text" 
                placeholder="Skill Three" 
                onChange={this.changeSkillThree} 
                value={this.state.pet.skillThree}
            />
            {
                this.state.errors.skillThree ?
                <span>{this.state.errors.skillThree.message}</span> :
                ""
            }
            <br/>
            <input type="submit" />
        </form>
        );
    }
}
    

export default UpdatePet;