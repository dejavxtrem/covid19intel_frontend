import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AmChartMap from './amchart/amchart';


class MapContainer extends React.Component {
    render () {
        return (
        <Container fluid>
          <Row>
            <Col>
            <AmChartMap/>
            </Col>
          </Row>
        </Container>

        )
    }
}

export default MapContainer;