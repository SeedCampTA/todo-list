import React from 'react'

class Header extends React.Component{
  render() {
    console.log('Props : ', this.props)
    return (
      <h1>{this.props.text}</h1>
    )
  }
}

export default Header