import React from 'react'
import Header from './Header'
import TodoList from './TodoList'
import Footer from './Footer'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header title="React Workshop @CPE CMU" />
        <TodoList />
        <Footer fullname="John Doe" nickname="John" />
      </div>
    )
  }
}

export default App
