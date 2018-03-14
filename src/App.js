import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="React Workshop @CPE CMU" />
        <TodoList />
        <Footer fullname="John Doe" nickname="John" />
      </div>
    )
  }
}

export default App
