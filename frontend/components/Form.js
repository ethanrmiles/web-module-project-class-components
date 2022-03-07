import React from 'react'


export default class Form extends React.Component {
  state = this.props.state
  addToDo = (evt) => {
      evt.preventDefault()
     console.log('submit clicked')
     this.props.handleAdd(this.state.input)
  }
  
  handleChange = (evt) => {
    this.setState({
      ...this.state, 
      input: evt.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input
        type='text'
        id='textInput'
        placeholder='type todo'
        onChange={this.handleChange}
        /> 
        <input 
        type='submit'
        onClick={this.addToDo}
        />
        </form>
      </div>
    )
  }
}
