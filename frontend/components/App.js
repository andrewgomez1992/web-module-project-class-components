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

  render() {
    const { todos } = this.state;
    // console.log(todos);
    return (
      <div>
        <TodoList todos={todos} />
        <Form />
        <button>Clear Completed</button>
      </div>
    )
  }
}
