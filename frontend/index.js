import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Form from './components/Form'
import './styles/reset.css'
import './styles/styles.css'

const todos = [
  {
    name: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    name: 'Bake Cookies',
    id: Date.now(),
    completed: false
  },
  {
    name: 'Deshed Dogs',
    id: Date.now(),
    completed: false
  }
]




render(
  <React.StrictMode>
    <h1>Todo App</h1>
    <App />
    <Form />
  </React.StrictMode>
  , document.getElementById('root')
)
