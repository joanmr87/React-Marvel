import React from 'react';

const HeroeDetail = (props) => (
    <div className="HeroContainer">        
        <h2>{props.heroe.name}</h2>
    </div>
);

export default HeroeDetail;