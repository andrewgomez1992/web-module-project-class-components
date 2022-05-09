import React from 'react';
import TodoList from './TodoList';
import Form from './Form';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Workout',
          id: Date.now(),
          completed: false,
        },
        {
          name: 'Bake Myself',
          id: Date.now(),
          completed: false
        },
        {
          name: 'Deshed Doggies',
          id: Date.now(),
          completed: false
        }
      ]
    }
  }

  handleAdd = (name) => {
    // setState
    // Change todos
    // Make a copy
    // Add a new todo to the end of our todo list

    const newTodo = {
      name: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = (e) => {
    // setState
    // loop through all todos
    // remove all todos that have completed === true
    // save filtered todos to state
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false)
      })
    })
  }

  handleToggle = (clickedId) => {
    // setState
    // change todos
    // find the todo that we clicked on
    // flip the value for that completed todo
    // keep all other todos the same


    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    })
  }



  render() {
    const { todos } = this.state;
    // console.log(todos);
    return (
      <div>
        <TodoList handleToggle={this.handleToggle} todos={todos} />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    )
  }
}
