import React from 'react';
import '../assets/styles/SplitPane.css'

const SplitPane = (props) => (   

    <div className="SplitPane">
        <div className="SplitPane-left">
            {props.left}
            
          
        </div>
        <div className="SplitPane-rigth">
            {props.right}            
        </div>
    </div>
    );


export default SplitPane;

/*<h1>Panel Izquierdo</h1>
   {props.left}
   <h1>Panel Derecho</h1>
   {props.rigth}
            */