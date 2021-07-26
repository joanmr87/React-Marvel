import React from "react";

function StoriesList(props) {
  return (
    <div>
      <ul>
        {props.heroe.stories.items.map((elemento) => {
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

export default StoriesList;
