import React, { Component, Fragment, } from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

//component imports
import Card from '../components/Card';
import Duel from '../components/Duel';
import NotFound from '../components/NotFound';

//CSS
import '../css/index.css';

export default class App extends Component {
  
  state = {
    player1: "player1",
    player2: "player2",

    players: [
      {
        name: "player 1",
      },
      {
        name: "player 2",
      }
    ],

    fireRedirect: false,
  }

  

  //-------------------------------------------------------------
  handlePlayerInput = event => {
    const name = event.target.name; //name of input
    const value = event.target.value; //value of input

    this.setState({
      [name]: value,
    });
  }

  playersSubmitHandler = event => {
    event.preventDefault(); //prevent default browser refresh

    this.setState({
      fireRedirect: true,
    })
  }







  
  //-------------------------------------------------------------
  render() {
    return (
      <BrowserRouter>
        <Fragment> 
            <Switch>
              
              <Route exact path="/" render={ () => (
                <Card 
                  player1={this.state.player1}
                  player2={this.state.player2}
                  handlePlayerInput={this.handlePlayerInput}
                  playersSubmitHandler={this.playersSubmitHandler}
                  fireRedirect = {this.state.fireRedirect} />
              )} />

              <Route path="/duel" render={ () => (
                <Duel />
              )} />
              
              <Route component={NotFound} />

            </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

