/* eslint-disable react/react-in-jsx-scope */
import './App.css'
import { Login, TodoList } from './components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrivateRoutes } from './utils/PrivateRoute'

import React from 'react'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<TodoList />} />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  )
}

export default App
