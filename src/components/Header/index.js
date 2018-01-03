import React from 'react';

const Header = props => (
  
  <header>
    <span className="arrow"></span>
    <img 
      src={ require('../../assets/yugioh-logo.png') } 
      alt="classic yu-gi-oh logo"/>
    <ul>
      <li>dueling</li>
      <li>official dueling rules</li>
      <li>how to use app</li>
    </ul>
  </header>
);

export default Header;