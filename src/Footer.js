import React from 'react'

class Footer extends React.Component {
  render() {
    return( 
    <div>
       Name: {this.props.fullname}  Nickname: {this.props.nickname}
    </div>
    )
  }
}

export default Footer