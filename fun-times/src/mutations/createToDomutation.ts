import { gql } from '@apollo/client'

export const createTodoMutation = gql`
  mutation createToDo($text: String!) {
    insert_todos_one(object: { text: $text }) {
      done
      id
      text
    }
  }
`
