import React, { Component, Fragment, } from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';

//component imports
import Card from '../components/Card';
import Duel from '../components/Duel';
import NotFound from '../components/NotFound';

//CSS
import '../css/index.css';

const initialState = {
  duelist1: "",
  duelist2: "",
  winner: null,
  fireRedirect: false,
  displayResetCard: false,

  duelers: [
    {
      index: 0,
      
      name: "duelist",
      lifePoints: 8000,
      calculate: "",
      prevlifePoints: 8000,
      lostCount: 0,
      
      calcIsOpen: false,
      isEditing: false,
    },
    {
      index: 1,
      
      name: "duelist",
      lifePoints: 8000,
      calculate: "",
      prevlifePoints: 8000,
      lostCount: 0,

      calcIsOpen: false,
      isEditing: false,
    },
  ],

  logs: [],
}

export default class App extends Component {

  state = initialState

  //-------------------------------------------------------------
  toggleProperty = property => {
    const propertyName = this.state.property;
    this.setState({
      [property]: !propertyName,
    })
  }

  toggleDisplayResetCardProperty = () => this.toggleProperty('displayResetCard'); 
  //-------------------------------------------------------------
  handlePlayerInput = event => {
    const { name, value } = event.target;
    
    if(value.length > 11) {
      alert('Name must be 10 characters or lower\nto fit in name plate correctly. Thank you.');
      return null;
    }

    this.setState({
      [name]: value,
    });
  }

  playersSubmitHandler = event => {
    event.preventDefault();

    const { duelist1, duelist2 } = this.state;
    let duelistNames = [duelist1, duelist2];
    duelistNames = duelistNames.map( name => name === "" ? name = "duelist" : name )
    

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

        return duelist
      })
    });
  }

  toggleEditing = index => {
    this.state.duelers.map( (duelist, i) => {
      if(i === index) {
        const { name } = duelist;
        if(name.length > 0) {
          this.togglePlayerProperty('isEditing', index);
        }
        return null;
      }
      return null;
    })
    
  }
  toggleCalcOpen = index => {
    this.togglePlayerProperty('calcIsOpen', index);
  }

  //-------------------------------------------------------------
  changePlayerName = (name, PlayersIndex) => {
    if(name.length > 11) {
      alert('Name must be 10 characters or lower\nto fit in name plate correctly. Thank you.');
      return null;
    }
    
    this.setState({
      duelers: this.state.duelers.map( (duelist, index) => {
        if(index === PlayersIndex) {
          return {
            ...duelist,
            name, //name: name,
          }
        }

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
  onUndoBtnClick = PlayerIndex => {
    this.setState({
      
      duelers: this.state.duelers.map( (duelist, index) => {
        const { prevlifePoints, lifePoints } = duelist;
        
        if(index === PlayerIndex) {
          if( lifePoints !== prevlifePoints ) {
            this.onLogUpdate( `${duelist.name.toUpperCase()} undid lifepoints back to ${prevlifePoints}` );
          }

          return {
            ...duelist,
            lifePoints: prevlifePoints,
          }
        }

        return duelist; 
      })
    });
  }

  //-------------------------------------------------------------
  onCalcBtnClick = (btnValue, PlayerIndex) => {
    
    this.setState({
      duelers: this.state.duelers.map( (duelist, index) => {
        const { calculate } = duelist;
        
        if(index === PlayerIndex) {
          return {
            ...duelist,
            calculate: calculate + btnValue,
          }
        
        }
        return duelist;
      })
    }) 
  }

  onClearDisplayBtn = PlayerIndex => {
    
    this.setState({
      duelers: this.state.duelers.map( (duelist, index) => {
        if(index === PlayerIndex) {
          return {
            ...duelist,
            calculate: "",
          }
        
        }
        return duelist;
      })
    })
  }

  onCalcDelBtn = PlayerIndex => {
  
    this.setState({
      duelers: this.state.duelers.map( (duelist, index) => {
        const { calculate } = duelist;

        if(index === PlayerIndex) {
          return {
            ...duelist,
            calculate: calculate.slice(0, -1),
          }
        
        }
        return duelist;
      })
    })
  }

  //-------------------------------------------------------------
  CalcSubmitHandler = (event, PlayerIndex) => {
    event.preventDefault(); //prevent refesh.

    this.setState({
      duelers: this.state.duelers.map( (duelist, index) => {

        if(index === PlayerIndex) {
          const { lifePoints, calculate, lostCount } = duelist;
          let productlP = this.handleLifePointCalculation(lifePoints, calculate, duelist);

          //when duelist loses
          if(productlP === 0) {
            this.setWinner(index);
            this.onLogUpdate(`${duelist.name.toUpperCase()} has lost`);
            this.toggleDisplayResetCardProperty();
            
            // close calculator and add lostCount
            return {
              ...duelist,
              calcIsOpen: false,
              calculate: "",
              lostCount: lostCount + 1,
            }
          }
          
          return {
            ...duelist,
            calcIsOpen: false,
            calculate: "",
            prevlifePoints: lifePoints,
            lifePoints: productlP,
          }
        }
        
        return duelist;
      })
    })
  }

  handleLifePointCalculation = (lifePoints, equation, duelist) => {
    lifePoints = String(lifePoints);
    let product;

    if(equation.startsWith("-") || equation.startsWith("+") || equation.startsWith("*")) {
      try {
        product = Math.ceil( eval(lifePoints.concat(equation)) );
        this.onLogUpdate( `${eval(equation)} to ${duelist.name.toUpperCase()}'s lifepoints` ) 
      } catch(error) {
        alert(`Invalid equation input. Please try again.\n${error.name}: ${error.message}.`);
        product = lifePoints;
      }
    } else {
      alert('Invalid equation input. Please initialize with +, - or x.');
      product = lifePoints;
    }
    
    //prevent negative value
    if(product <= 0) {
      product = 0;
    }

    return product;
  }

  setWinner = index => {
    const winner = index === 0 ? this.state.duelers[1].name : this.state.duelers[0].name;
    this.setState({
      winner,
    })
  }

  //-------------------------------------------------------------
  onNewGameBtnClick = () => {
    this.setState(initialState);
  }

  onNextRoundBtnClick = () => {

    this.setState({
      displayResetCard: false,

      // reset life points
      duelers: this.state.duelers.map( duelist => {
        return {
          ...duelist,
          lifePoints: 8000,
          prevlifePoints: 8000,
        }
      })
    })
  }

  //-------------------------------------------------------------
  onLogUpdate = newLog => {
    const { logs } = this.state;

    this.setState({
      logs: [
        ...logs,
        newLog
      ]
    })
  }

  //-------------------------------------------------------------

  render() {
    return (
      <BrowserRouter basename="/yu-gi-oh-calculator">
        <Fragment> 
            <Switch>
              
              <Route exact path="/" render={ () => 
                <Card 
                  duelist1={this.state.duelist1}
                  duelist2={this.state.duelist2}
                  handlePlayerInput={this.handlePlayerInput}
                  playersSubmitHandler={this.playersSubmitHandler}
                  fireRedirect = {this.state.fireRedirect} />
              } />

              <Route path="/duel" render={ () => 
                <Duel 
                  duelers={this.state.duelers}
                  toggleEditing={this.toggleEditing}
                  changePlayerName={this.changePlayerName}
                  onKeyPress={this.onKeyPress}
                  toggleCalcOpen={this.toggleCalcOpen}
                  onCalcBtnClick={this.onCalcBtnClick}
                  onClearDisplayBtn={this.onClearDisplayBtn}
                  onCalcDelBtn={this.onCalcDelBtn}
                  CalcSubmitHandler={this.CalcSubmitHandler}
                  onUndoBtnClick={this.onUndoBtnClick}
                  player1LostCount={this.state.duelers[0].lostCount}
                  player2LostCount={this.state.duelers[1].lostCount}
                  winner={this.state.winner}
                  displayResetCard={this.state.displayResetCard}
                  onNewGameBtnClick={this.onNewGameBtnClick}
                  onNextRoundBtnClick={this.onNextRoundBtnClick}
                  logs={this.state.logs}
                  onLogUpdate={this.onLogUpdate} />
              } />
              f
              <Route component={NotFound} /> 
            </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

