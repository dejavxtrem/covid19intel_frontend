import React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import  './dropdown.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class DropDown extends React.Component {
    render () {
        return (
            <Container className="dropdown">
            {/* dropdown component on col */}
            <Row>
              <Col className="coldrop">
              <ReactFlagsSelect  className="menu-flags"/>
              </Col>
            </Row>
          </Container>
            
        )
    }


}


export default DropDown;