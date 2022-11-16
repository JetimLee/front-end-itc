import { TodoItem } from '../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { json, useNavigate } from 'react-router-dom'
import { Todo } from './Todo'
import './TodoList.css'
import { useAppSelector, useAppDispatch } from '../hooks/useTypedSelector'
import { setActualToDoItems, setToDoItems } from '../features/slices/todoSlice'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { NewToDo } from './NewToDo'

export const TodoList = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const searchInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const [addingToDo, setAddingToDo] = useState(false)
  //this is the state.searchedTodos that is used for rendering and comparing against the actual todolist
  const todoList: TodoItem[] = useAppSelector((state) => state.searchedTodos)
  const actualToDoList: TodoItem[] = useAppSelector((state) => state.todos)
  const startNewToDo = (e: React.FormEvent) => {
    e.preventDefault()
    setAddingToDo(!addingToDo)
  }
  const toggleAddingToDo = (addingToDo: boolean) => {
    setAddingToDo(!addingToDo)
  }
  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/login')
  }
  const handleSearch = () => {
    const searchedToDos = actualToDoList.filter((todo) =>
      todo.text
        .toLowerCase()
        .includes(searchInputRef.current.value.toLowerCase())
    )
    dispatch(setToDoItems(searchedToDos))
  }
  useEffect(() => {
    const todos = localStorage.getItem('todos')
    if (todos !== null) {
      const jsonTodos = JSON.parse(todos)
      if (todos && jsonTodos.length > 0) {
        dispatch(setActualToDoItems(JSON.parse(todos)))
      }
    }
  }, [])
  useEffect(() => {
    handleSearch()
  }, [actualToDoList])

  return (
    <div className="todo__main">
      <nav className="nav__container">
        <button onClick={handleLogout} className="btn--white">
          Logout
        </button>
      </nav>
      <main className="todo__container">
        <h1>My To-Do List</h1>
        <div className="todo__list">
          <div className="todo__search">
            <div className="search__container">
              <FontAwesomeIcon className="input__icon" icon={faSearch} />
              <input
                onChange={handleSearch}
                ref={searchInputRef}
                type="search"
                className="search__input"
                placeholder="search"
              />
            </div>
            <button
              onClick={(e) => startNewToDo(e)}
              type="submit"
              className="btn--primary btn--white-text btn--todo"
            >
              New
            </button>
          </div>
          {addingToDo && (
            <NewToDo
              addingToDo={addingToDo}
              toggleAddingToDo={toggleAddingToDo}
            />
          )}
          {todoList.map((todo: TodoItem) => {
            const { id } = todo
            return <Todo key={id} todo={todo} />
          })}
        </div>
      </main>
    </div>
  )
}
