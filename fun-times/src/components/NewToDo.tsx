import React, { MutableRefObject, useRef, FC, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_TODO_MUTATION } from '../mutations'
import './NewToDo.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/slices/todoSlice'

interface NewToDoProps {
  addingToDo: boolean
  toggleAddingToDo: Function
}

export const NewToDo: FC<NewToDoProps> = ({ addingToDo, toggleAddingToDo }) => {
  const [createToDo] = useMutation(CREATE_TODO_MUTATION)
  const dispatch = useDispatch()
  const newToDoInputRef = useRef() as MutableRefObject<HTMLInputElement>
  const validateToDoInput = (): boolean => {
    return (
      newToDoInputRef.current.value.length > 0 &&
      newToDoInputRef.current.value.length <= 25
    )
  }
  const handleNewToDoSubmission = async (e: React.FormEvent) => {
    e.preventDefault()
    if (validateToDoInput()) {
      // const newToDo: TodoItem = {
      //   done: false,
      //   id: uuidv4(),
      //   text: newToDoInputRef.current.value,
      // }
      // dispatch(addTodo(newToDo))
      const { data } = await createToDo({
        variables: { text: newToDoInputRef.current.value },
      })
      const { insert_todos_one } = data
      dispatch(addTodo(insert_todos_one))
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
