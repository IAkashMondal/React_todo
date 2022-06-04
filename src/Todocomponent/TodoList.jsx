import React from 'react'
import { TodoItems } from './TodoItems'
import { Todo } from './Todo'
const TodoList= ({pros,onDelete}) =>  {

  return (
    <div>
         <TodoItems pros={pros} onDelete={onDelete}></TodoItems>
    </div>
  )
}

export default TodoList