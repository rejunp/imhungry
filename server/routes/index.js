var express = require('express');
var router = express.Router();

const resturant_controller = require('../controllers/resturant.controller');

router.get('/api/getresturants',resturant_controller.get_all);
router.get('/api/getloc',resturant_controller.get_geo_loc);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
