import React from "react";

function SeriesList(props) {
  return (
    <div>
      <ul>
        {props.heroe.series.items.map((elemento) => {
          return (
            <li>
              <a>{elemento.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SeriesList;
