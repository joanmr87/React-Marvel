import React from "react";

function ComicsList(props) {
  return (
    <div>
      <ul>
        {props.heroe.comics.items.map((elemento) => {
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

export default ComicsList;
