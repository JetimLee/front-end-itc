import { gql } from '@apollo/client'

export const DELETE_TODO_MUTATION = gql`
  mutation deleteToDo($id: uuid!) {
    delete_todos(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`
