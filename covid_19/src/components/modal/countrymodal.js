import React from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button'


class CountryModal extends React.Component {


    render () {
        return (
            <Modal
            size="lg"
            centered="true"  show={this.props.showUp}  onHide={this.props.hideModal}> 
            <ModalDialog>
                <ModalHeader closeButton >
                    <ModalTitle>
                        Modal Heading
                    </ModalTitle>
                </ModalHeader>
                <ModalBody>
                <h4>Centered Modal</h4>
                      <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p>
                    <ModalFooter >
                        <Button onClick={this.props.hideModal}>Close</Button>
                    </ModalFooter>
                </ModalBody>
            </ModalDialog>
            </Modal>
        )
    }
}

export default CountryModal;