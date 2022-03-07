import React from 'react'

let id = 0
const getId = () => id++;

const initialState = {
   id: getId() ,
   name: '',
   completed: false
}

const toDos = 
[
  {
    name: 'Organize Garage',
    id: 1,
    completed: false
  },

  {
    name: 'Bake Cookies',
    id: 2,
    completed: false
  }
]


export default class App extends React.Component {
state = initialState

  render() {
    return (
      <div>
        <h1>Todos:</h1>
      </div>
    )
  }
}
