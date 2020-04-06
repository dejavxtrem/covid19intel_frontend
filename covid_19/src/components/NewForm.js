import React from 'react'
import '../App.css';
import Form from 'react-bootstrap/Form'



class NewForm extends React.Component {
    state = {
        
            name: '',
            comments: '',
            location: '',
        
    }
   
    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value})
      }

      handleSubmit = (event) => {
        event.preventDefault()
        fetch(this.props.baseURL + '/covidstats', {
          method: 'POST',
          body: JSON.stringify({name: this.state.name, comments: this.state.comments, location: this.state.location}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then (res => res.json())
          .then (resJson => {
            this.props.handleAddRequest(resJson)
            this.setState({
              name: '',
              comments: '',
              location: ''
            })
        }).catch (error => console.error({'Error': error}))
      }
    
    
    render() {
            return (
               <Form onSubmit={this.handleSubmit}>
                 <Form.Group controlId="formBasicEmail"></Form.Group>
                   <Form.Label>Name</Form.Label>
                   <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Name" />
                   <input type="text" id="comments" name="comments" onChange={this.handleChange} value={this.state.comments} placeholder="Comment" />
                   <input type="text" id="location" name="location" onChange={this.handleChange} value={this.state.location} placeholder="Location" />
                   <input type="submit" value="Submit"/>

               </Form>  
            )
        }
}

export default NewForm