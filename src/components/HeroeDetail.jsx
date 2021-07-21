import React from 'react';
import '../assets/styles/HeroeDetail.css';

const HeroeDetail = (props) => (
    <div className="HeroContainer">   
        <img className= "image-heroe" src={props.heroe.thumbnail.path + '.jpg'} alt='imagen heroe'/>     
        <h2>{props.heroe.name}</h2>
    </div>
);

export default HeroeDetail;