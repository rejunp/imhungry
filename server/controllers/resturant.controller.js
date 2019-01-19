var csv = require("csvtojson");
const path = require('path');

exports.get_all = function (req, res) {
	console.log("Inside get_all");
	//res.sendFile(path.join(__dirname, '../public', 'index.html'));
	// Convert a csv file with csvtojson
	console.log("PATH::==>" + path.join(__dirname, '../data', 'restaurantsa9126b3.csv'));
	csv()
		.fromFile(path.join(__dirname, '../data', 'restaurantsa9126b3.csv'))
		.then(function (jsonArrayObjMain) { //when parse finished, result will be emitted here.

			csv()
				.fromFile(path.join(__dirname, '../data', 'restaurant_addc9a1430.csv'))
				.then(function (jsonArrayObjLoc) { //when parse finished, result will be emitted here.
					var jsonArg = new Object();
					var jsonArgFinal = new Object();
					for (index = 0; index < jsonArrayObjLoc.length; ++index) {
						var pNode = new Array();
						const key = jsonArrayObjLoc[index]["Restaurant ID"].toString().trim();
						jsonArg[key] = jsonArrayObjLoc[index];
					}
					for (index = 0; index < jsonArrayObjLoc.length; ++index) {
						const key = jsonArrayObjMain[index]["Restaurant ID"];
						jsonArrayObjMain[index].locationData=jsonArg[key];
					}

					res.json(jsonArrayObjMain); // return all todos in JSON format
				});
		//	res.json(jsonArrayObj); // return all todos in JSON format
		});
}

exports.get_geo_loc = function (req, res) {
	console.log("Inside get_geo_loc");
	//res.sendFile(path.join(__dirname, '../public', 'index.html'));
	// Convert a csv file with csvtojson
	console.log("PATH::==>" + path.join(__dirname, '../data', 'restaurant_addc9a1430.csv'));
	csv()
		.fromFile(path.join(__dirname, '../data', 'restaurant_addc9a1430.csv'))
		.then(function (jsonArrayObj) { //when parse finished, result will be emitted here.
			var jsonArg = new Object();
			for (index = 0; index < jsonArrayObj.length; ++index) {
				var pNode = new Array();
				const key = jsonArrayObj[index]["Restaurant ID"].toString().trim();
				jsonArg[key] = jsonArrayObj[index];
			}
			res.json(jsonArg); // return all todos in JSON format
		});
}
