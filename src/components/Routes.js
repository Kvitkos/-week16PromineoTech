import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Members from './Members';
import Create from './create';
import Read from './read';
import Update from './update';
import Detail from './detail';
import "./Members.css";


export default class Routes extends Component {
    render() {
        const getMember = props => {
            let name = props.match.params.name;
            let currentMember = this.props.members.find(
      //toLowerCase allows for the URL to have caps        
            member => member.name.toLowerCase() === name.toLowerCase() 
            );
            return <Detail {...props} member={currentMember} />;
          };
        return (
            <Switch>
                <Route exact path='/' render={() => <Home />} />
                <Route exact path='/members' render={() => <Members members={this.props.members} />} />
                <Route exact path='/members/:name' render={getMember} />
                <Route exact path='/create' render={() => <Create />} />
                <Route exact path='/read' render={() => <Read />} />
                <Route path='/update' render={() => <Update />} />
                <Redirect to='/' />
            </Switch>
        )
    }
}