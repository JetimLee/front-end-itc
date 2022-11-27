import { gql } from '@apollo/client'
export const GET_TODOS = gql`
  query getTodos {
    todos {
      done
      id
      text
    }
  }
`
