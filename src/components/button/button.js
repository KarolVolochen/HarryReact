import React from "react";
import "./styles.css";

// function Button(props){


//     return (
//         <div className="containerButton">
//         <button className={props.active ? 'button' : 'disabledButton'}>{props.name}</button>
//         <span>Seus dados estão a salvo conosco</span>
//         </div>
//     )
// }


//outra forma de escrever, pois é um objeto!
function Button({name, active, onClick}){

    return (
        <div className="containerButton">
        <button button onClick={() =>onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button>
        <span>Seus dados estão a salvo conosco</span>
        </div>
    )
}

export default Button