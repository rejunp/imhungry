import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {
   Badge, Button, UncontrolledAlert, Card, CardImg, CardBody,
   CardTitle, CardSubtitle, CardText,  Row, Col, CardDeck, CardColumns,
	Form, FormGroup, Input
} from 'reactstrap';
import ResturantCard from './ResturantCard';

const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';
class Post extends Component {
     constructor(props) {
     	super(props);
     	this.state = {
     		resturants: [],
     		initialItems: [],
			resturantCount : 0
     	};
     	this.filterList = this.filterList.bind(this);
     	this.filterListByName = this.filterListByName.bind(this);

     }
     filterList(event) {
     	console.log('Inside -- filterList');
     	var updatedList = this.state.initialItems;
     	updatedList = updatedList.filter(function (item) {
     		return item.Cuisines.toLowerCase().search(
     			event.target.value.toLowerCase()) !== -1;
     	});
     	this.setState({
     		resturants: updatedList,
			resturantCount : updatedList.length

     	});
     }
	 filterListByName(event) {
     	console.log('Inside -- filterList');
     	var updatedList = this.state.initialItems;
     	updatedList = updatedList.filter(function (item) {
     		return item["Restaurant Name"].toLowerCase().search(
     			event.target.value.toLowerCase()) !== -1;
     	});
     	this.setState({
     		resturants: updatedList,
			resturantCount : updatedList.length

     	});
     }

/*     getInitialState() {
     	return {
     		initialItems: [],
     		resturants: []
     	}
     }*/
  componentDidMount() {
    /*axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=4&format=text')*/
    axios.get('/api/getresturants')
      .then(response => {
						 console.log("Got Response--");

						 this.setState({ initialItems : response.data,
										 resturantCount : response.data.length,
										 resturants : response.data });
						}
		   );
  }

	render() {
		return (
			<Fragment>
				{this.state.resturants && <div className="position-relative">
			 		<span className="d-block pb-2 mb-0 h6 text-uppercase text-info font-weight-bold">
				 		Filter
				 		<Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>New</Badge>
					</span>

					<Form>
						<FormGroup>

						</FormGroup>
					</Form>

					<Row form>
					  <Col md={6}>
						<FormGroup>
						  <Input  type="text" className="form-control form-control-lg" placeholder="Search based on Cuisines" onChange={this.filterList}/>
						</FormGroup>
					  </Col>
					  <Col md={6}>
						<FormGroup>
						  <Input  type="text" className="form-control form-control-lg" placeholder="Search By Name" onChange={this.filterListByName}/>
						</FormGroup>
					  </Col>

					</Row>
					<span className="d-block pb-4 h2 text-dark border-bottom border-gray">Resturants Around the World
			        	<Badge pill color="success" className="text-uppercase px-2 py-1 ml-3 mb-1 align-middle" style={{ fontSize: '0.75rem' }}>{ this.state.resturantCount }</Badge>
			    	</span>

					<Row>
						<CardColumns>
							{this.state.resturants.map(resturant =>
								<ResturantCard resturant={resturant} />
							)}
						</CardColumns>
					</Row>
				</div>
				}
			</Fragment>
    );
  }

}

export default Post;
