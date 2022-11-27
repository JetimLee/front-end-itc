import { gql } from '@apollo/client'

export const deleteToDoMutation = gql`
  mutation deleteToDo($id: uuid!) {
    delete_todos(where: { id: { _eq: $id } }) {
      returning {
        id
      }
    }
  }
`
