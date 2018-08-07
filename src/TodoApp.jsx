import React from 'react'
import Todos from './todos/index'
import Filter from './filter/index'

function TodoApp(){
    return (
        <div>
            <Todos />
            <Filter />
        </div>
    );
}

export default TodoApp;