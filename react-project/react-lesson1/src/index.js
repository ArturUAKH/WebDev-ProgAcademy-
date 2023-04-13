import React from "react";
import ReactDOM from "react-dom";

import data from "./data"

function App (){
    return (
        <div>
            <h1>Курс валют на {data[0].exchangedate}</h1>
            <table border='1'>
                {data.map(el => {
                    return <tr>
                               <td>{el.txt}</td>
                               <td>{el.rate}</td>
                           </tr>
                })}
            </table>    
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));

console.log(data);