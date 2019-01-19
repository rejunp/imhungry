import React, { Fragment } from 'react';

import {
  Button, UncontrolledAlert, Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText, CardFooter
} from 'reactstrap';
import MapModal from './MapModal';

const BANNER = 'https://i.imgur.com/CaKdFMq.jpg';

function userRatingClass(resturant) {
		 console.log("Inside userRatingClass");
	 	//Number(resturant["Aggregate rating"])
	 		var customClass = ""
	 		switch (resturant["Rating color"]) {
	 			case "Dark Green":
					customClass+=" color-dark-green";
	 				break;
	 			case "Green":
					customClass+=" color-green";
					break;
	 			case "Yellow":
					customClass+=" color-yellow";
					break;
	 			case "Orange":
					customClass+=" color-orange";
	 				break;
	 			default:
	 				customClass+=" ";
	 		}
		 return customClass;
	 }

const ResturantCard = ({resturant}) => (
  <Fragment>
	<Card>
		<CardBody>
			<CardTitle className="h3 mb-2 pt-2 font-weight-bold text-secondary">{resturant["Restaurant Name"]}</CardTitle>
			<CardSubtitle className="text-secondary mb-3 font-weight-light text-uppercase" style={{ fontSize: '0.8rem' }}>{resturant["Cuisines"]}</CardSubtitle>
			<CardText className="text-secondary" >Average Cost for two : {resturant["Average Cost for two"] +" "+resturant["Currency"] } </CardText>
			<CardText className="text-secondary" >Has Table booking : <span className={resturant["Has Table booking"]==="Yes"?"fa fa-thumbs-up text-success":"fa fa-thumbs-down text-danger"}></span> </CardText>
			<CardText className="text-secondary" >Has Online delivery : <span className={resturant["Has Online delivery"]==="Yes"?"fa fa-thumbs-up text-success":"fa fa-thumbs-down text-danger"}></span> </CardText>
			<MapModal resturant={resturant}/>
		</CardBody>
		<CardFooter>
			<span className="heading">User Rating </span>
			<span className={"fa fa-star " + (Number(resturant["Aggregate rating"])>=1 ? userRatingClass(resturant)  : "")} ></span>
			<span className={"fa fa-star " + (Number(resturant["Aggregate rating"])>=2 ? userRatingClass(resturant)  : "")} ></span>
			<span className={"fa fa-star " + (Number(resturant["Aggregate rating"])>=3 ? userRatingClass(resturant)  : "")} ></span>
			<span className={"fa fa-star " + (Number(resturant["Aggregate rating"])>=4 ? userRatingClass(resturant)  : "")} ></span>
			<span className={"fa fa-star " + (Number(resturant["Aggregate rating"])==5 ? userRatingClass(resturant)  : "")} ></span>
			<p>{resturant["Aggregate rating"]} average based on {resturant["Votes"]} reviews.

				</p>
		</CardFooter>
	</Card>

  </Fragment>
);

export default ResturantCard;


