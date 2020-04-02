import React from 'react';
import './App.css';
import NewForm from './components/NewForm.js'

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

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   fetch(this.props.baseURL + '/covidstats', {
  //     method: 'POST',
  //     body: JSON.stringify({requests: this.state.requests}),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then (res => res.json())
  //     .then (resJson => {
  //       this.props.handleAddRequest(resJson)
  //       this.setState({
  //         requests: ''
  //       })
  //   }).catch (error => console.error({'Error': error}))
  // }

  render() {
    console.log(this.state.requests)
  return (

    // Comments/Requests
    <div className="commentsContainer">
      <h1 className="comment-title">Post any comments or requests in your area</h1>
      <NewForm baseURL={baseURL}
  handleAddRequest={this.handleAddRequest}/>
    </div>
  );
}
}


export default App;
