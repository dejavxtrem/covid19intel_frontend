import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import  './dropdown.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//drop down countries imports
import countryFinder from './dropdowncountries';

let apiKEY = '39f4998951msh07883f04b2178e7p1b36dbjsnbf1a0ddc7ca0'


class DropDown extends React.Component {

  state = {
    covidSearch: {countries_stats: []}

  }

  componentDidMount() {
    this.getCountry();
    this.onSelectFlag();
  }

  //API call to get search data
  getCountry = () => {
    fetch(`https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php`, {
      "method": "GET",
      headers: {
       'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
       'x-rapidapi-key': `${apiKEY}`
 
      }
    }).then(data => data.json(), err => console.log(err))
      .then(parsedData => this.setState({covidSearch: parsedData}), err => console.log('parsedData', err))
  }


  //Convert DropDown country abriv to search country string
  onSelectFlag = (country) => {
      for (let [key, value] of Object.entries(countryFinder)) {
         if (country === key) {
           console.log(`${value}`)
         }
      }
      
  }

    render () {

      console.log(this.state.covidSearch)
        return (
            <Container className="dropdown">
            {/* dropdown component on col */}
            <Row>
              <Col className="coldrop">
              <ReactFlagsSelect  className="menu-flags" onSelect={this.onSelectFlag}/>
              </Col>
            </Row>
          </Container>
            
        )
    }


}


export default DropDown;