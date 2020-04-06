import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class CountryModal extends React.Component {


    render () {
        return (
            <Modal
            centered="true"  show={this.props.showUp}  onHide={this.props.hideModal}> 
            <ModalDialog>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.flagDisplay} />
                    <Card.Body>
                    <Card.Title>{this.props.countryPick.country_name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                     <ListGroup.Item> Cases: {this.props.countryPick.cases}</ListGroup.Item>
                    <ListGroup.Item>Deaths: {this.props.countryPick.deaths}</ListGroup.Item>
                    <ListGroup.Item>Active Cases: {this.props.countryPick.active_cases}</ListGroup.Item>
                    <ListGroup.Item>New Cases: {this.props.countryPick.new_cases}</ListGroup.Item>
                    <ListGroup.Item>New Deaths: {this.props.countryPick.new_deaths}</ListGroup.Item>
                    <ListGroup.Item>Total Recovered: {this.props.countryPick.total_recovered}</ListGroup.Item>
                   <ListGroup.Item>Total cases Per Population: {this.props.countryPick.
total_cases_per_1m_population}</ListGroup.Item>
                    </ListGroup>
                    </Card>
                 <ModalFooter>
                 <Button onClick={this.props.hideModal}>Close</Button>
                 </ModalFooter>
                 
            </ModalDialog>
            </Modal>
        )
    }
}

export default CountryModal;