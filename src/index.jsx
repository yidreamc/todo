import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'

React.render(
    <Provider>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);