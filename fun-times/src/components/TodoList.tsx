import { TodoItem } from '../interfaces'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Todo } from './Todo'
import './TodoList.css'
import { useAppSelector, useAppDispatch } from '../hooks/useTypedSelector'
import { setActualToDoItems } from '../features/slices/todoSlice'
import React, { useEffect, useState, useMemo } from 'react'
import { NewToDo } from './NewToDo'
import { GET_TODOS } from '../queries/getTodos'
import { useQuery } from '@apollo/client'
import { Spinner } from './Spinner'

//TODO
//CATCH AND DISPLAY ERROR, use a cutsie image like the 404 not found or this is the result you're not looking for??

export const TodoList = () => {
  const { data, loading, error } = useQuery(GET_TODOS)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const [addingToDo, setAddingToDo] = useState(false)
  //switch out this secondary piece of state to something like useCallBack or useMemo
  const actualToDoList: TodoItem[] = useAppSelector((state) => state.todos)
  const memoizedToDoList = useMemo(() => actualToDoList, [actualToDoList])
  const filteredResults = memoizedToDoList.filter((todo) => {
    return todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  })
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
  // const handleSearch = () => {
  //   // const searchedToDos = actualToDoList.filter((todo) =>
  //   //   todo.text
  //   //     .toLowerCase()
  //   //     .includes(searchInputRef.current.value.toLowerCase())
  //   // )
  //   // dispatch(setToDoItems(searchedToDos))
  // }

  useEffect(() => {
    if (data !== undefined) {
      dispatch(setActualToDoItems(data.todos))
    }
  }, [data])

  //useful for local storage, IRL would use DB
  // useEffect(() => {
  //   const todos = localStorage.getItem('todos')
  //   if (todos !== null) {
  //     const jsonTodos = JSON.parse(todos)
  //     if (todos && jsonTodos.length > 0) {
  //       dispatch(setActualToDoItems(JSON.parse(todos)))
  //     }
  //   }
  // }, [])
  // useEffect(() => {
  //   handleSearch()
  // }, [actualToDoList])

  if (error) return <div>An error occurred when fetching todos...</div>

  return (
    <div className="todo__main">
      <nav className="nav__container">
        <button onClick={handleLogout} className="btn--white">
          Logout
        </button>
      </nav>

      <main className="todo__container">
        {loading ? (
          <div className="center__container">
            <Spinner />
          </div>
        ) : (
          <>
            <h1>My To-Do List</h1>
            <div className="todo__list">
              <div className="todo__search">
                <div className="search__container">
                  <FontAwesomeIcon className="input__icon" icon={faSearch} />
                  <input
                    onChange={(e) => setSearchTerm(e.target.value)}
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
              {filteredResults.map((todo: TodoItem) => {
                const { id } = todo
                return <Todo key={id} todo={todo} />
              })}
            </div>
          </>
        )}
      </main>
    </div>
  )
}
