import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MapContainer from './components/headermap';
import DropDown from  './components/dropdown/dropdown';
import TableComponent from './components/table/table'
import AmChartMap from  './components/amchart/amchart';
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
              <DropDown/>
              </Col>
            </Row>
          {/* table component on col */}
            <Row>
              <Col>
              <TableComponent/>
              </Col>
            </Row>
        </Container>
     
      
      
    </div>
  );
}
}

export default App;
