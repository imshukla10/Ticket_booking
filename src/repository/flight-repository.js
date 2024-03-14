const {Flights} = require('../models/index');

class FlightRepository{

    async createFlights(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something wrong in flight repo",error);
            throw {error};
        }
    }

}

module.exports = FlightRepository;