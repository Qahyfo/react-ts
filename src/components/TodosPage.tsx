import React, {FC, useEffect, useState} from 'react'
import List from './List'
import { ITodo } from '../types/types'
import TodoItem from './TodoItem'
import axios from 'axios'

// Время 37.39

const TodosPage: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos/?_limit=10')
      setTodos(response.data)
    } catch (e) {
      alert(e)
    }
  }
  
  useEffect(() => {
    fetchTodos()
  }, [])


  return (
    <List 
        items={todos} 
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>} 
      />
  )
}

export default TodosPage
