import { gql } from '@apollo/client'

export const CREATE_TODO_MUTATION = gql`
  mutation createToDo($text: String!) {
    insert_todos_one(object: { text: $text }) {
      done
      id
      text
    }
  }
`
