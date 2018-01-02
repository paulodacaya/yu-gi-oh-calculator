import React from 'react';
import PropTypes from 'prop-types';

import PlayersInputForm from './PlayersInputForm';

//images
import YugiohLogo from '../../img/yugioh-logo.png';

const CardHeader = props => (

  <div className="container">
    <div className="card-header">
      <img src={YugiohLogo} alt="classic yu-gi-oh logo"/>
      <h2>dueling application</h2>
      <p>please enter the names of the two duelist!</p>
    </div>

    <PlayersInputForm />
  </div>
);

export default CardHeader;