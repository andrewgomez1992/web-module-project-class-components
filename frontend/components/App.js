import React from 'react'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'Workout',
          id: Date.now(),
          completed: false
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
        },
      ]
    }
  }

  render() {
    const { todos } = this.state;
    // console.log(todos);
    return (
      <div>
        <ul>
          {
            todos.map(todo => {
              return (<li>{todo.name} {todo.completed ? <span> - completed </span> : <span></span>}</li>)
            })
          }
        </ul>
        <form>
          <input
            type='text'
            name='todo'
          // value={}
          // onChange={}  
          />
          <button>Add Todo</button>

        </form>
        <button>Clear Completed</button>
      </div>
    )
  }
}
