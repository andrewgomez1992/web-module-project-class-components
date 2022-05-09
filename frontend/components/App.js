import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Workout</li>
          <li>Bake Myself</li>
          <li>Deshed Dogs</li>
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
