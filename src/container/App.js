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
    fireRedirect: false,
    headerExists: false,

    duelers: [
      {
        index: 0,
        name: "duelist",
        
        lifePoints: 8000,
        calculate: "",
        prevlifePoints: null,
        
        calcIsOpen: false,
        isEditing: false,
      },
      {
        index: 1,
        name: "duelist",
        
        lifePoints: 8000,
        calculate: "",
        prevlifePoints: null,

        calcIsOpen: false,
        isEditing: false,
      },
    ],
  }
  //-------------------------------------------------------------
  toggleHeaderExistance = () => {
    const { headerExists } = this.state;
    this.setState({
      headerExists: !headerExists,
    })
  }
  //-------------------------------------------------------------
  handlePlayerInput = event  => {
    const name = event.target.name; //name of input
    const value = event.target.value; //value of input

    this.setState({
      [name]: value,
    });
  }

  playersSubmitHandler = event => {
    event.preventDefault(); //prevent default browser refresh

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
    this.togglePlayerProperty('isEditing', index);
  }
  toggleCalcOpen = index => {
    this.togglePlayerProperty('calcIsOpen', index);
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
  onUndoBtnClick = PlayerIndex => {
    this.setState({
      
      duelers: this.state.duelers.map( (duelist, index) => {
        const { prevlifePoints } = duelist;
        
        if(index === PlayerIndex) {
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



  handleLifePointCalculation = (lifePoints, equation) => {
    lifePoints = String(lifePoints);
    let product;

    if(equation.startsWith("-") || equation.startsWith("+") || equation.startsWith("*")) {
      product = Math.ceil( eval(lifePoints.concat(equation)) );
    } else {
      product = lifePoints;
    }

    //prevent negative value.
    if(product < 0) {
      product = 0;
    }

    return product;
  }

  CalcSubmitHandler = (event, PlayerIndex) => {
    event.preventDefault(); //prevent refesh.

    this.setState({
      duelers: this.state.duelers.map( (duelist, index) => {

        if(index === PlayerIndex) {
          const { lifePoints, calculate } = duelist;
          const productlP = this.handleLifePointCalculation(lifePoints, calculate);
          
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



  //-------------------------------------------------------------
  render() {
    return (
      <BrowserRouter>
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
                  headerExists={this.state.headerExists}
                  toggleHeaderExistance={this.toggleHeaderExistance} />
              } />
              
              <Route render={ () => 
                <NotFound headerExists={this.state.headerExists} /> 
              } />
            </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

