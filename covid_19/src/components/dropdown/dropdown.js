import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import  './dropdown.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//drop down countries imports
import countryFinder from './dropdowncountries';


class DropDown extends React.Component {

// componentDidMount() {
//  this.covidFunction()
// }


//function to check if the dropdown country string matches the country name in the api data
finderCountry = (valueFinder) => {
  this.props.covidData.countries_stat.some(countryFind => {
     if (countryFind.country_name === valueFinder) {
        console.log(countryFind)
     }
  })
}
  
  
  
  
 


  //Convert DropDown country abbreviation to search country string
  onSelectFlag = (country) => {
      let valueFinder;
      for (let [key, value] of Object.entries(countryFinder)) {
         if (country === key) {
           console.log(`${value}`)
           valueFinder = value
         }
      }
    //pass down the country string to the API props data to compare country name
      this.finderCountry(valueFinder)
  }

    render () {
     

    //console.log(this.finderCounry())
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