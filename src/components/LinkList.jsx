import React from "react";

function LinkList(props) {
  return (
    <div>
      <ul>
        {props.lista.map((elemento) => {
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

export default LinkList;
