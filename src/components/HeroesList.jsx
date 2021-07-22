import React from "react";

import "../assets/styles/HeroesList.css";

function HeroesList(props) {
  
  return (
    <ul class="ul">
      {props.heroe.results.map((elemento, i) => {
        let colorFondo = "white";        
        if (i === props.selectedHeroe) {
          colorFondo = "lightblue";
        }
        return (
          <li class="list-item"
            key={elemento.id}
            style={{
              backgroundColor: colorFondo,
            }}
          >
            <a className="a"
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
<ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>

export default HeroesList;
