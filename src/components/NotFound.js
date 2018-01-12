import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NotFound = props => {
  if(props.headerExists) {
    return (
      <div className="NotFound">
        <img  
          src={ require('../assets/yugi.png') } 
          alt="Yami Yugi" />
        <div>
          <h1><span>it's time to d-d-d-d... what!</span> I don't think I'm dueling you!</h1>
          <h2>error code 404: page not found.</h2>
          <p>please click on the tab 'Dueling' to duel your opponent.</p>
        </div>    
      </div>
    )
  } else {
    return (
      <div className="NotFound">
        <img  
          src={ require('../assets/yugi.png') } 
          alt="Yami Yugi" />
        <div>
          <h1><span>it's time to d-d-d-d... what!</span> I don't think I'm dueling you!</h1>
          <h2>error code 404: page not found.</h2>
          <p><Link to="/">click here</Link> to find another duelist.</p>
        </div>    
      </div>
    )
  }
}

NotFound.propTpyes = {
  headerExists: PropTypes.bool.isRequired,
}

export default NotFound; 