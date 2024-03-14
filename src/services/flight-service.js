const {FlightRepository,AirplaneRepository} = require('../repository/index');


class FlightService{
    
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data){
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlights({
                ...data,
                totalSeats:airplane.capacity
            })
            return flight;
        } catch (error) {
            console.log("Something wrong in flight service",error);
            throw {error};
        }
    }

}


module.exports = FlightService;