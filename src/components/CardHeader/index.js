import React from 'react';
import PropTypes from 'prop-types';

import PlayersInputForm from './PlayersInputForm';

const CardHeader = props => (

  <div className="container">
    <div className="card-header">
      <img src={ require('../../assets/yugioh-logo.png') } alt="classic yu-gi-oh logo"/>
      <h2>dueling application</h2>
      <p>please enter the names of the two duelist!</p>
    </div>

    <PlayersInputForm />
  </div>
);

export default CardHeader;