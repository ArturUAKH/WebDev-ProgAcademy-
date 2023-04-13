import React from "react";
import './todo-list.css';
import { Thead } from "./thead/thead";




const TodoList = ({data}) => {
    const headers = ["№", "Назва задачі", "Статус", "Дата зміни"];
    return (
        <table lang='uk'>
            <Thead headers={headers}></Thead>
            <tbody>

                
            </tbody>  
        </table>
    )
}


export default TodoList;