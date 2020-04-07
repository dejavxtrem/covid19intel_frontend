import React from 'react'
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

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
              name: this.state.name,
              comments: this.state.comments,
              location: this.state.location
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
          this.setState({name: '', comments: '', location: ''})
      }).catch (error => console.error({'Error': error}))
  }
  
  handleChange = (event) => {
      this.setState({[event.target.id]: event.target.value})
  }
    render () {
      return (

        <>
        <Modal centered="true"  show={this.props.showUp}  onHide={this.props.hideModal}>
           
             <ModalDialog>
             <ModalHeader closeButton >
                    <ModalTitle>
                        Update your request
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                  <Form onSubmit={this.hideModal}>
            <Form.Row>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                defaultValue={this.props.request.name}
                onChange={this.handleChange}
              />
              <Form.Label>Comments</Form.Label>
              <Form.Control
                type="text"
                id="comments"
                defaultValue={this.props.request.comments}
                onChange={this.handleChange}
              />
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                id="location"
                defaultValue={this.props.request.location}
                onChange={this.handleChange}
              />
              </Form.Row>
            </Form>
            <ModalFooter >
              
                    
              <Button onClick={this.handleSubmit}>Update Request</Button>
              <Button onClick={this.props.hideModal}>Close</Button>
            </ModalFooter>
            </ModalBody>
            </ModalDialog>
          </Modal>
          <br/><br/><br/>
        </>
      )
    }
}

export default UpdateModal