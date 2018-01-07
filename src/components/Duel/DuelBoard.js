import React from 'react';
import PropTypes from 'prop-types';

import DuelPlayer from './DuelPlayer';

const DuelBoard = props => (
  <main className="duel-board">

    {
      props.duelers
        .map( (duelist, index) =>  (
          <DuelPlayer 
            key={index}
            name={duelist.name}
            lifePoints={duelist.lifePoints}
            isEditing={duelist.isEditing}
            handleToggleEditing={() => {
              props.toggleEditing(duelist.index);
            }} />
        )
      )
    }

    <img 
      className="vs-image" 
      src={ require('../../assets/versus-img.png') } 
      alt="versus logo" />

  </main>
);

DuelBoard.propTypes = {
  duelers: PropTypes.array.isRequired,
  toggleEditing: PropTypes.func.isRequired,
};

export default DuelBoard; 

