import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  state = {
    todos: ['Read a book.', 'Write a book.', 'Throw a book.'],
    input: '',
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  addTodo = (event) => {
    event.preventDefault()

    const newTodos = this.state.todos.concat(this.state.input)

    this.setState({ todos: newTodos, input: '' })
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <div>
          { this.state.todos.map((todo, index) => {
            return <TodoItem key={index} text={todo} />
          }) }
        </div>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            value={this.state.input}
            onChange={this.onInputChange}
          />
          <input type="submit" value="create" />
        </form>
      </div>
    )
  }
}

export default TodoList
