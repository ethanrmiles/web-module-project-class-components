import React from 'react'

export default class Form extends React.Component {
  onSubmit = evt => {
    evt.preventDefault()
    console.log('we are submitting now')
    this.props.onSubmit()
  }
  
  onChange = evt => {
    const { value, id } = evt.target
console.log('i am changing', id, value)
    this.props.onChange(id, value)
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
        />
        </form>
      </div>
    )
  }
}
