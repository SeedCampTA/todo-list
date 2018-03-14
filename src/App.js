import React from 'react'
import Header from './Header'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return(
      <div>
        <Header text="To Do List" />
        <ul>
          <li>read book</li>
          <li>write book</li>
          <li>A book</li>
        </ul>
        <Footer fullname="Patcharapon Wangtiyong" nickname="Wiw"/>
      </div>
    )
  }
}
export default App