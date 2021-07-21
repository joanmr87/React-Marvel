import React from "react";

import "../assets/styles/HeroesList.css";

function HeroesList(props) {
  
  return (
    <ul>
      {props.heroe.results.map((elemento, i) => {
        let colorFondo = "white";        
        if (i === props.selectedHeroe) {
          colorFondo = "lightblue";
        }
        return (
          <li
            key={elemento.id}
            style={{
              backgroundColor: colorFondo,
            }}
          >
            <a 
                onClick={() => {                
                console.log("click " + elemento.name);
                props.setSelectedHero(i);
              }}
              href={elemento.resourceURI}
            >
              {elemento.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default HeroesList;
