import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  
  <header>
    <img 
      src={ require('../../assets/yugioh-logo.png') } 
      alt="classic yu-gi-oh logo" />
      
    <ul>
      <li><NavLink to="/duel/duelboard">dueling</NavLink></li>
      <li><NavLink to="/duel/rules">official dueling rules</NavLink></li>
      <li><NavLink to="/duel/app-guide">how to use app</NavLink></li>
    </ul>
  </header>
);

export default Header;