import React from 'react';
import './App.css';
//Dejay imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MapContainer from './components/headermap';
import DropDown from  './components/dropdown/dropdown';
import TableComponent from './components/table/table'
import AmChartMap from  './components/amchart/amchart';
//Comment imports
import NewForm from './components/NewForm.js'
import Show from './components/Show.js'
import UpdateModal from './components/UpdateForm'
let apiKEY = '39f4998951msh07883f04b2178e7p1b36dbjsnbf1a0ddc7ca0'

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3003'
// } else {
//   baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
// }



console.log(apiKEY)


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


//comment component - to be moved to separate file later
class CommentRequest extends React.Component {

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
    this.setState({request, getRequestActive: true, getEditRequestActive: false}) 
  }

    //for edit route
    getEditRequest = (request) => {
      this.setState({request, getRequestActive: false, getEditRequestActive: true})
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
  
    render() {
      
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
          <td onMouseOver={() => this.getRequest(request)}>{request.name}</td>
          <td>{request.comments}</td>
          <td>{request.location}</td>
          <td className="delete"><button onClick={() => this.deleteRequest(request._id)}>Delete</button></td>
          <td className="edit"><button onClick={() => {this.getEditRequest(request)} }>Edit</button></td>
          </tr>
      ))}
    </tbody>
  </table>
  {this.state.getRequestActive ? <Show request={this.state.request}/> : null}
  <br/>
  <br/>
  
  {this.state.getEditRequestActive ? <UpdateModal baseURL={baseURL}request={this.state.request} handleEditRequest={this.handleEditRequest}/>: null}
      </div>
    );
  }
  }

  
  //Dejay app component
class App extends React.Component {

  state = {
    //create a placeholder for 208 array of objects
    covidData: {countries_stat:[...Array(208).fill({...Object})]}
  }

//compDidmount method
componentDidMount() {
  this.getCovidStats();
}

//make fetch request to get data from api
 getCovidStats = () => {
   fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', {
     "method": "GET",
     headers: {
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': `${apiKEY}`

     }
   }).then(data => data.json(), err => console.log(err))
     .then(parsedData => this.setState({covidData: parsedData}), err => console.log('parsedData', err))
 }

  render() {
    
  return (
 
    <div className="App">
      {/* Dejay skelaton */}

        <Container >
            {/* Mapcontainer component on col */}
            <Row>
              <Col>
              <MapContainer/>
              </Col>
            </Row>
          {/* amchart component on col */}
            <Row>
              <Col>
              <AmChartMap/>
              </Col>
            </Row>
          {/* dropdown component on col */}
            <Row>
              <Col>
              <DropDown covidData={this.state.covidData}/>
              </Col>
            </Row>
          {/* table component on col */}
            <Row>
              <Col>
              <TableComponent covidApiData={this.state.covidData}/>
              </Col>
            </Row>
             <Row>
              <Col>
              <CommentRequest/>
              
              </Col>
            </Row>
        </Container>

    </div>
  );
}
}


export default App