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
        calculate: "",

        isEditing: false,
      },
      {
        index: 1,
        name: "player 2",
        
        lifePoints: 8000,
        calculate: "",

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
    const duelistNames = [duelist1, duelist2];
    
    this.setState({
      duelers: this.state.duelers.map( (duelist, index) => {
        return {
          ...duelist,
          name: duelistNames[index]
        }
      }),

      fireRedirect: true,
    });
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
  //handle calculation here on submit.
  handleBtnClick = () => {
    
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

