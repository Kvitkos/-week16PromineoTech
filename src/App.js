import React, { Component } from 'react';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import "./App.css";
import buster from "./images/buster.jpg";
import ella from "./images/ella.jpg";
import pickles from "./images/pickles.jpg";
import oswald from "./images/oswald.jpg";
import bonnie from "./images/bonnie.jpg";
import iggy from "./images/iggy.jpg";
 
export default class App extends Component {
  static defaultProps =  {
    members: [
    {
        name: "Iggy",
        src: iggy,
        breed: "Shih Tzu",
        owner: "Molly Tucker",
        about: "Iggy is super spunky and loves his food."
    },
    {
        name: "Bonnie",
        src: bonnie,
        breed: "Labrador",
        owner: "The White Family",
        about: "Bonnie LOVES the water."
    },
    {
        name: "Buster",
        src: buster,
        breed: "French Bulldog",
        owner: "Tyrone",
        about: "Buster is still a puppy, but he's figuring things out."
    },
    {
        name: "Oswald",
        src: oswald,
        breed: "Weimaraner",
        owner: "KC Aela",
        about: "Oswald will play fetch with you all day long!"
    },
    {
        name: "Ella",
        src: ella,
        breed: "Pitbull Mix",
        owner: "Sheila E.",
        about: "She is very protective of her people."
    }, 
    {
        name: "Pickles",
        src: pickles,
        breed: "Schnauzer",
        owner: "LouAnn Smith",
        about: "'I am the goodest boy!'"
    }
    ]
  }
  render() {   
    return (
      <div>
          <Navbar members={this.props.members} />
          <div className='App'>
          <Routes members={this.props.members} />
          </div>
      </div>
    );
  }
}
