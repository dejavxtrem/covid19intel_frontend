import React from 'react'

class Show extends React.Component {
  render () {
    return (
      <>
        <div className="details">
         <h4> { this.props.request.name } </h4>
         <h6> { this.props.request.comments} </h6>
         <h6> {this.props.request.location}</h6>
       </div>
      </>
    )
  }
 }
export default Show