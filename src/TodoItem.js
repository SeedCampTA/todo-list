import React from 'react'

class TodoItem extends React.Component {
  render() {
    return (
      <p>{this.props.text}</p>
    )
  }
}

export default TodoItem
