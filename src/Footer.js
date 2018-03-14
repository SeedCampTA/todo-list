import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.fullname}</p>
        <p>Nickname: {this.props.nickname}</p>
      </div>
    )
  }
}

export default Footer
