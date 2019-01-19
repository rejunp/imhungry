import React from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

import Map from './Map';


class MapModal extends React.Component {
	constructor(props) {
		super(props);
		console.log("Hello from Map Modal");
		console.log(props);
		this.state = {
			modal: false,
			locationData: []
		};

		this.toggle = this.toggle.bind(this);


	}

	toggle() {
			this.setState({
				modal: !this.state.modal
			});
    }

  render() {
    return (
      <div>
        <Button color="info" className="font-weight-bold btn float-right" onClick={this.toggle}><i className="fa fa-location-arrow" aria-hidden="true"></i> Address </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.resturant["Restaurant ID"]}>
          <ModalHeader toggle={this.toggle} >Location </ModalHeader>
          <ModalBody>
		  <Row className="clearfix">
			<Col>
				Address:
				<address> {this.props.resturant.locationData.Address}</address>
			</Col>
		  </Row>
			  <Map
                    app_id="0etNHVQpVlYq19ZIMA8r"
                    app_code="GnTQW_LcBFER-c7EX-0b3g"
                    lat={this.props.resturant.locationData.Latitude}
                    lng={this.props.resturant.locationData.Longitude}
                    zoom="12"
                />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default MapModal;
