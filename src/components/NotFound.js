import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="notfound parallelogram">
    <img
      className="notfound__image"  
      src={ require('../assets/warning.svg') } 
      alt="warning design with exclamation point in the middle of a triangle" />
    <div className="notfound__content">
      <h2>error code 404: page not found.</h2>
      <p><Link to="/">click here</Link> for yu-go-oh dueling app.</p>
    </div>    
  </div>
);

export default NotFound; 