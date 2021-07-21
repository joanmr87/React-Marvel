import React from 'react';

import '../assets/styles/HeroesList.css'

const HeroesList = (props) => (
    <div className="HeroesList">
        <h3>Esto es el panel izquierdo</h3>
      {props.children}
    </div>
);


export default HeroesList;