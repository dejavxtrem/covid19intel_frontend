import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NewForm from './components/NewForm.js'
import Show from './components/Show.js'
import UpdateModal from './components/UpdateForm.js'

// .env BaseURL for React
let baseURL = process.env.REACT_APP_BASEURL


if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:9000'
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
}

console.log('current base URL:', baseURL)

fetch(baseURL+ '/covidstats')
  .then(data => {
    return data.json()},
    err => console.log(err))
  .then(parsedData => console.log(parsedData),
   err => console.log(err))

class App extends React.Component {

  state = {
    
    requests: []
  }

  componentDidMount() {
    this.getComments()
  }

  getComments = () => {
    fetch(baseURL+ '/covidstats')
      .then(data => {
        return data.json()},
        err => console.log(err))
        .then(parsedData => this.setState({
          requests: parsedData
        }),
         err=> console.log(err))
  }

//for show route
getRequest = (request) => {
  this.setState({request}, () => {
    console.log(this.state)
  })
}

// Edit
updateRequest =(request) => {
  this.setState({request}) 
    console.log(this.state)
  
}


 // New Form HandleAdd 
  handleAddRequest = (requests) => {
    const copyRequest = [...this.state.requests]
    copyRequest.unshift(requests)
    this.setState({
      requests: copyRequest,
      name: '',
      comments: '',
      location: '',
    })
  }

  handleEditRequest = (request) => {
    console.log(request)
  }

    //function to delete a request and return all the others
    deleteRequest = (id) => {
      fetch(baseURL + '/covidstats/' + id, {
        method: 'DELETE'
      }).then ( res => {
        const requestsArr = this.state.requests.filter( request => {
          return request._id !== id
        })
        this.setState({requests: requestsArr})
      })
    }

    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };

    

  render() {
    // console.log(this.state.requests)
  return (

    // Comments/Requests
    <div className="commentsContainer">
      <h1 className="comment-title">Post any comments or requests in your area</h1>
      <NewForm baseURL={baseURL}
  handleAddRequest={this.handleAddRequest}/>

  {/* this is where the requests will display */}
  <br/>
  
  <table>
  <tbody>
  <tr>
        <td>Name:</td> 
        <td>Comment/request:</td>
        <td>Location:</td>
       </tr> 
    {this.state.requests.map(request => (
       <tr key={request._id}>
      
        <td>{request.name}</td>
        <td>{request.comments}</td>
        <td>{request.location}</td>
        <td><button onClick={() => this.deleteRequest(request._id)}>Delete</button></td>
        <td><button onClick={() => this.showModal()} >Edit</button></td>
        </tr>
    ))}
  </tbody>
</table>
{/* {this.state.request ? <Show request={this.state.request}/> : null} */}
{this.state.request ? <UpdateModal baseURL={baseURL} request={this.state.request} handleEditRequest={this.handleEditRequest}/> : null}
    </div>
  );
}
}


export default App;
