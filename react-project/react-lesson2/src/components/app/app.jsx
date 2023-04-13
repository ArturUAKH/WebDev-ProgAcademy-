import React from 'react';
import {Title} from '../title/title'
import  TodoList from '../todo-list/todo-list';
import data from '../../data/list'


function App (){
    return (
        <>
            <Title></Title>
            <TodoList data={data}></TodoList>
        </>
    )
}

export default App