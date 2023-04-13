import React from "react";

export const Thead = function({headers}){
    return (
        <thead>
            <tr>
                {(Array.isArray(headers))? 
                headers.map((th, i)=>{
                    return (
                        <th key={Math.random()*100+i+'thead'}>{th}</th>
                    )
                })
                : <div>Помилка</div>}
            </tr>
        </thead>
    )
}