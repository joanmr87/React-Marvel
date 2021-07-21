import React from "react";

function LinkList(props) {
  return (
    <div>
      <ul>
        {props.heroe.comics.items.map((elemento) => {
          return (
            <li>
              <a href="#">{elemento.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LinkList;
