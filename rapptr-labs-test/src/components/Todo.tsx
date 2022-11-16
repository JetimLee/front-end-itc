import React, { FC, MutableRefObject, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import { TodoItem } from '../interfaces'
import './Todo.css'
import { useAppDispatch, useAppSelector } from '../hooks/useTypedSelector'
import {
  removeToDo,
  setToDoItems,
  updateTodoITems,
} from '../features/slices/todoSlice'

interface TodoProps {
  todo: TodoItem
}
export const Todo: FC<TodoProps> = ({ todo: { completed, id, text } }) => {
  const [todoEditing, setToDoEditing] = useState('')
  const dispatch = useAppDispatch()
  const actualToDoList: TodoItem[] = useAppSelector((state) => state.todos)
  const editInputRef = useRef() as MutableRefObject<HTMLInputElement>

  const handleDelete = () => {
    const filteredToDos = actualToDoList.filter((todo) => todo.id !== id)
    dispatch(removeToDo(filteredToDos))
  }

  const validateToDoInput = (): boolean => {
    let isValid = false
    if (
      editInputRef.current.value.trim().length > 0 &&
      editInputRef.current.value.trim().length <= 25
    ) {
      isValid = true
      return isValid
    }
    return isValid
  }
  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateToDoInput()) {
      const updatedTodos = [...actualToDoList].map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: editInputRef.current.value }
        }
        return todo
      })
      dispatch(updateTodoITems(updatedTodos))
      setToDoEditing('')
      return
    }
    console.log('could not save input')
  }
  return (
    <div className="todoitem__container">
      {todoEditing === id ? (
        <form className="todo__edit-form" onSubmit={(e) => handleEdit(e)}>
          <input
            className="newtodo__input"
            placeholder={text}
            type="text"
            ref={editInputRef}
          />
          <button className="btn--save btn--todo btn--white-text" type="submit">
            Save
          </button>
        </form>
      ) : (
        <>
          <div className="todotext__container">
            <p>{text}</p>
          </div>
          <div className="todo__icons">
            <FontAwesomeIcon
              onClick={() => setToDoEditing(id)}
              className="todo__icon"
              icon={faEdit}
            />
            <FontAwesomeIcon
              onClick={handleDelete}
              className="todo__icon"
              icon={faTrash}
            />
          </div>
        </>
      )}
    </div>
  )
}
