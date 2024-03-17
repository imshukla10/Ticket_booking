const express = require('express');
const CityController = require('../../controllers/city-controller')
const AirportController = require('../../controllers/airport-controller')
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

//city routes
router.post('/city',CityController.create);
router.post('/cities',CityController.createMultiple);
router.delete('/city/:id',CityController.destroy);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.put('/city/:id',CityController.update);


//airport routes
router.post('/airports',AirportController.create);


//flight routes
router.post('/flights',FlightController.create);
router.get('/flights/:id',FlightController.get);
router.get('/flights',FlightController.getAll);

module.exports = router;