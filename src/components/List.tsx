import type { ChangeEvent } from 'react'
import type { Todo } from '../App'

interface ListProps {
  todos: Todo[]
  handleTaskChange: (todo: Todo, e: ChangeEvent<HTMLInputElement>) => void
}

export default function List({ todos, handleTaskChange }: ListProps) {
  const remaining = todos.filter((t) => !t.completed).length

  return (
    <section className="list">
      <div className="list__heading">
        <h2>Tasks</h2>
        {todos.length > 0 && (
          <span className="list__count">
            {remaining} left
          </span>
        )}
      </div>

      {todos.length === 0 ? (
        <p className="list__empty">Nothing here yet. Add your first task above.</p>
      ) : (
        <ul className="list__items">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? 'task is-done' : 'task'}
            >
              <label className="task__checkbox">
                <input
                  className="task__native"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => handleTaskChange(todo, e)}
                />
                <svg
                  className="task__check"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5l3.5 3.5L13 5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </label>
              <span className="task__label">{todo.todo}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
