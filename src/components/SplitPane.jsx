import React, { Children } from 'react';
import '../assets/styles/SplitPane.css'

const SplitPane = ({Children}) => (   

    <div className="SplitPane">
        <div className="SplitPane-left">
            <h1>Lista Heroes</h1>
            {Children}
          
        </div>
        <div className="SplitPane-rigth">
            <h1>Detalle Heroe</h1>
            {Children}
            
        </div>
    </div>
    );


export default SplitPane;

/*<h1>Panel Izquierdo</h1>
   {props.left}
   <h1>Panel Derecho</h1>
   {props.rigth}
            */