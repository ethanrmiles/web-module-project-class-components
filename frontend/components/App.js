import React from 'react'
import Form from './Form'
import TodoList from './TodoList';

let id = 0
const getId = () => id++;

const toDos = 
[
  {
    name: 'Organize Garage',
    id: getId(),
    completed: false
  },

  {
    name: 'Bake Cookies',
    id: getId(),
    completed: true
  },
  {
    name: 'Bake Cookies',
    id: getId(),
    completed: false
  }
]

const initialState = {
  toDos, 
  form: {textInput:''}
}

export default class App extends React.Component {
state = initialState

//all state changing methods will go here
changeInput = (key, value) => {
  this.state({...this.state,
    form: { ...this.state.form, [key]:value }
  })
}

addToDo = () => {

}

  render() {
    console.log('rendering with props', this.props)
    console.log('rendering with state is', this.state)

    const { toDos, form } = this.state
   
    return (
      <div>
        <h1>Todos:</h1>
      <TodoList  toDos={toDos} />
        < Form onChange={this.changeInput} values={form} onSubmit={this.addToDo} />
      </div>
    )
  }
}
