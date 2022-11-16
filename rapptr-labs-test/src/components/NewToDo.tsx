import React, { MutableRefObject, useRef, FC, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { addTodo } from '../features/slices/todoSlice'
import { useAppDispatch } from '../hooks/useTypedSelector'
import { TodoItem } from '../interfaces'
import './NewToDo.css'

//HERE FOR EXAMPLE, REMOVE BEFORE USING REALLY
// export interface TodoItem {
//     id: string
//     text: string
//     completed: boolean
//   }

interface NewToDoProps {
  addingToDo: boolean
  toggleAddingToDo: Function
}

export const NewToDo: FC<NewToDoProps> = ({ addingToDo, toggleAddingToDo }) => {
  const dispatch = useAppDispatch()
  const newToDoInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const validateToDoInput = (): boolean => {
    let isValid = false
    if (
      newToDoInputRef.current.value.trim().length > 0 &&
      newToDoInputRef.current.value.trim().length <= 25
    ) {
      isValid = true
      return isValid
    }
    return isValid
  }
  const handleNewToDoSubmission = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateToDoInput()) {
      const newToDo: TodoItem = {
        completed: false,
        id: uuidv4(),
        text: newToDoInputRef.current.value,
      }
      dispatch(addTodo(newToDo))
      toggleAddingToDo(addingToDo)
    } else {
      return
    }
  }

  useEffect(() => {
    newToDoInputRef.current.focus()
  }, [])
  return (
    <form
      onSubmit={(e) => handleNewToDoSubmission(e)}
      className="newtodo__container"
    >
      <input
        ref={newToDoInputRef}
        type="text"
        className="newtodo__input"
        placeholder="Do something..."
        aria-placeholder="Do something..."
      />
      <button
        onClick={handleNewToDoSubmission}
        type="submit"
        className="btn--save btn--todo btn--white-text"
      >
        Save
      </button>
    </form>
  )
}
