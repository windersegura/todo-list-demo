import { useState, type ChangeEvent } from 'react'
import List from './components/List'
import './App.css'

export interface Todo {
  id: string
  todo: string
  completed: boolean
}

function App() {
  const [todo, setTodo] = useState('')
  const [list, setList] = useState<Todo[]>([])

  const handleAddTodo = (e) => {
    e.preventDefault()

    const value = todo.trim()
    if (!value) return

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      todo: value,
      completed: false,
    }
    setList((prev) => [...prev, newTodo])
    setTodo('')
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }

  const handleTaskChange = (target: Todo, e: ChangeEvent<HTMLInputElement>) => {
    setList((list) =>
      list.map((t) => (t.id === target.id ? { ...t, completed: e.target.checked } : t)),
    )
  }

  return (
    <div className="app">
      <div className="card">
        <header className="card__header">
          <h1>Todo List</h1>
          <p>Keep today light. Add tasks, check them off.</p>
        </header>

        <form className="todo-form" onSubmit={handleAddTodo}>
          <input
            className="todo-form__input"
            type="text"
            placeholder="What needs doing?"
            onChange={handleInputChange}
            value={todo}
          />
          <button className="todo-form__button" type="submit">
            Add
          </button>
        </form>

        <List todos={list} handleTaskChange={handleTaskChange} />
      </div>
    </div>
  )
}

export default App
