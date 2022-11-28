import { gql } from '@apollo/client'

export const CHANGE_TODO_MUTATION = gql`
  mutation MyMutation($id: uuid!, $text: String!) {
    update_todos(_set: { text: $text }, where: { id: { _eq: $id } }) {
      returning {
        done
        id
        text
      }
    }
  }
`
