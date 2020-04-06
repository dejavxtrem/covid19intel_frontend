import React from 'react'

class UpdateModal extends React.Component {
//     state = {
//       name: '',
//       comments: '',
//       location: ''
//   }
  
  handleSubmit = (event) => {
    //   event.preventDefault()
      //send the data to the server
      fetch(this.props.baseURL + '/covidstats/' + this.props.request._id, {
          method: 'PUT',
          body: JSON.stringify({
              name: this.props.name,
              comments: this.props.comments,
              location: this.props.location
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      })
      //the server then responds with json
      .then (res => res.json())
      .then (resJson => {
          //add the received data to state in app
          this.props.handleEditRequest(resJson)
          this.setState({name: '', species: '', breed: ''})
      }).catch (error => console.error({'Error': error}))
  }
  
  handleChange = (event) => {
      this.setState({[event.target.id]: event.target.value})
  }
    render () {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                defaultValue={this.props.request.name}
                onChange={this.handleChange}
              />
              <label htmlFor="comments">Comments</label>
              <input
                type="text"
                id="comments"
                defaultValue={this.props.request.comments}
                onChange={this.handleChange}
              />
              <label htmlFor="location">Location</label>
              <input
                type="text"
                id="location"
                defaultValue={this.props.request.location}
                onChange={this.handleChange}
              />
              <input type="submit" value="Update Request" className="button-primary" />
              <button className="button-red"> Don't Update </button>
            </div>
          </form>
          <br/><br/><br/>
        </div>
      )
    }
  }
export default UpdateModal