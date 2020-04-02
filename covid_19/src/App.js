import React from 'react';
import logo from './logo.svg';
import './App.css';
import MapContainer from './components/headermap';

let apiKEY = process.env.REACT_APP_GOOGLE_API_KEY

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3003'
// } else {
//   baseURL = 'https://fathomless-sierra-68956.herokuapp.com'
// }



//console.log(apiKEY)

class App extends React.Component {

  state = {
    covidData: []
  }

//compDidmount method
componentDidMount() {
  this.getCovidStats();
}

//make fetch request to get data from api
 getCovidStats = () => {
   fetch('https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php?', {
     "method": "GET",
     headers: {
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': `${apiKEY}`

     }
   }).then(data => data.json(), err => console.log(err))
     .then(parsedData => this.setState({covidstats: parsedData}), err => console.log('parsedData', err))
 }


  render() {
  return (
    <div className="App">
      <MapContainer/>
    </div>
  );
}
}

export default App;
