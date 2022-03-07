import React from 'react'


export default class Form extends React.Component {
  addToDo = (evt) => {
      evt.preventDefault()
     console.log('submit clicked')
     this.props.handleAdd()
  }
  
  
  render() {
    const { values } = this.props
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <input
        type='text'
        id='textInput'
        placeholder='type todo'
        onChange={this.onChange}
        value={values}
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
