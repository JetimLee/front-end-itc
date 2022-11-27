/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './features/store'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// console.log(import.meta.env.VITE_HASURA_KEY)
const client = new ApolloClient({
  uri: import.meta.env.VITE_HASURA_URL,
  cache: new InMemoryCache(),
  headers: { 'x-hasura-access-key': import.meta.env.VITE_HASURA_KEY },
})
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
)
