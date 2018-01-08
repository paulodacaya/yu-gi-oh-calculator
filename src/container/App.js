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
    duelist1: "",
    duelist2: "",

    duelers: [
      {
        index: 0,
        name: "player 1",
        lifePoints: 8000,
        isEditing: false,
      },
      {
        index: 1,
        name: "player 2",
        lifePoints: 8000,
        isEditing: false,
      },
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

    const { duelist1, duelist2 } = this.state;

    this.setState({
      //THIS IS SUPER BAD, MUTATING STATE, 
      //having trouble completing this.
      duelers: [
        {
          index: 0,
          name: duelist1,
          lifePoints: 8000,
          isEditing: false,
        },
        {
          index: 1,
          name: duelist2,
          lifePoints: 8000,
          isEditing: false,
        },
      ],

      fireRedirect: true,
    })
  }

  //-------------------------------------------------------------
  togglePlayerProperty = (property, index) => {
    
    this.setState({
      duelers: this.state.duelers.map( duelist => {
        if(index === duelist.index) {
          return {
            ...duelist,
            [property]: !duelist[property],
          }
        }

        return {
          ...duelist,
        }
      })
    });
  }

  toggleEditing = index => {
    this.togglePlayerProperty('isEditing', index);
  }

  //-------------------------------------------------------------
  changePlayerName = (name, PlayersIndex) => {
    
    this.setState({
      duelers: this.state.duelers.map( (duelist, index) => {
        if(index === PlayersIndex) {
          return {
            ...duelist,
            name, //name: name,
          }
        }

        //if index not match
        return duelist;
      })
    });
  }

  onKeyPress = (key, PlayerIndex) => {
    
    this.state.duelers.map( (duelist, index) => {
      if(index === PlayerIndex) {
        if (key === "Enter") {
          return this.toggleEditing(index);
        }
        return null;
      }
      return null;
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
                  duelist1={this.state.duelist1}
                  duelist2={this.state.duelist2}
                  handlePlayerInput={this.handlePlayerInput}
                  playersSubmitHandler={this.playersSubmitHandler}
                  fireRedirect = {this.state.fireRedirect} />
              )} />

              <Route path="/duel" render={ () => (
                <Duel 
                  duelers={this.state.duelers}
                  toggleEditing={this.toggleEditing}
                  changePlayerName={this.changePlayerName}
                  onKeyPress={this.onKeyPress} />
              )} />
              
              <Route component={NotFound} />

            </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

