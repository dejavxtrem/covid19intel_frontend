import React from 'react'

class UpdateModal extends React.Component {

    // state = {
    //     name: '',
    //     comments: '',
    //     location: '',
    // }



    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
      }
    // handleCommentsChange = (event) => {
    //     this.setState({ comments: event.target.value})
    //   }
    // handleLocationChange = (event) => {
    //     this.setState({ location: event.target.value})
    //   }

    handleEditSubmit = (event) => {
        event.preventDefault()
        fetch(this.props.baseURL + '/covidstats', + this.props.request._id, {
          method: 'PUT',
          body: JSON.stringify({name: this.props.name, comments: this.props.comments, location: this.props.location}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then (res => res.json())
          .then (resJson => {
            this.props.handleEditRequest(resJson)
            this.setState({
              name: '',
              comments: '',
              location: ''
            })
        }).catch (error => console.error({'Error': error}))
      }

  render () {
      console.log(this.state)
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit Jewel</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
      <form onSubmit={this.handleEditSubmit}>
          <div className="modal-body">
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" onChange={this.handleChange} defaultValue={this.props.request.name} />
                <input type="text" id="comments" name="comments" onChange={this.handleChange} defaultValue={this.props.request.comments} />
                <input type="text" id="location" name="location" onChange={this.handleChange} defaultValue={this.props.request.location} />
            </div>
            <div className="modal-footer">
            <input type="submit" value="Save Changes" className="button-primary" />
            <button className="button-red"> Close </button>
            
          </div>
        </form>
        </div>
        </div>
        </div>
        </div>
      
    )
  }
}
export default UpdateModal