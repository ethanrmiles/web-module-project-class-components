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




handleAdd = (task) => {
  const newTask = {
    name: task,
    id: getId(),
    completed: true
  }

  this.setState({
    ...this.state,
    form: initialState.form.textInput,
    toDos: [...this.state.toDos, newTask]
  })
}

handleClear = () =>{
  console.log('clearClicked')
  this.setState({
    ...this.state,
    toDos: this.state.toDos.filter(todo => {
      return (todo.completed === false )
    })
  })
}

  render() {
    console.log('rendering with props', this.props)
    console.log('rendering with state is', this.state)

    const { toDos, form } = this.state
   
    return (
      <div>
        <h1>Todos:</h1>
      <TodoList  toDos={toDos} />
        < Form state={this.state} handleAdd={this.handleAdd}  />
        <button onClick={this.handleClear}>clear</button>
      </div>
    )
  }
}
