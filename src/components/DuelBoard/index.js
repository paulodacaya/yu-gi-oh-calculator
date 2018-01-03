import React from 'react';

import DuelPlayer from './DuelPlayer';

const DuelBoard = props => (
  <main className="duel-board">

    <DuelPlayer />
    <img src={ require('../../assets/versus-img.png') } alt="versus logo" />
    <DuelPlayer />
  </main>
);

export default DuelBoard; 