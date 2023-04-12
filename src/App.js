import React, { Component } from 'react';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import "./App.css";
import FredCouples from "./images/Fred Couples.jpg";
import JordanSpieth from "./images/Jordan Spieth.jpg";
import JonRahm from "./images/Jon Rahm.jpeg";
import BrooksKeopka from "./images/Brooks Keopka.jpg";
import JustinThomas from "./images/Justin Thomas.jpg";
import TigerWoods from "./images/Tiger Woods.jpg";
 
export default class App extends Component {
  static defaultProps =  {
    members: [
    {
        name: "Tiger Woods",
        src: TigerWoods,
        Nationality: "United States",
        winsNumber: "82",
        about: "Tiger Woods has 82 PGA Tour wins and 15 Major Championship wins"
    },
    {
        name: "Justin Thomas",
        src: JustinThomas,
        Nationality: "United States",
        winsNumber: "17",
        about: "Justin Thomas has 15 PGA Tour wins and 2 Major Championship wins."
    },
    {
        name: "Fred Couples",
        src: FredCouples,
        Nationality: "United States",
        winsNumber: "16",
        about: "Fred Couples has 15 PGA Tour wins and 1 Major Championship wins ."
    },
    {
        name: "Brooks Keopka",
        src: BrooksKeopka,
        Nationality: "United States",
        winsNumber: "11",
        about: "Brooks Keopka has 8 PGA Tour wins and 3 Major Championship wins"
    },
    {
        name: "Jordan Spieth",
        src: JordanSpieth,
        Nationality: "United States",
        winsNumber: "16",
        about: "Jordan Spieth has 13 PGA Tour wins and 3 Major Championship wins."
    }, 
    {
        name: "Jon Rahm",
        src: JonRahm,
        Nationality: "Spain",
        winsNumber: "13",
        about: "Jon Rahm has 11 PGA Tour wins and 2 Major Championship wins"
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
