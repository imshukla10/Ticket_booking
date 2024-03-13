const {AirportRepository} = require('../repository/index');

const airportRepository = new AirportRepository();

class AirportService{
    async createAirport(data){
        try {
            const airport = await airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("Error occur in airport service");
            throw {error};
        }
    }


    async updateAirport(id,data){
        try {
            const airport = await airportRepository.updateAirport(id,data);
            return airport;
        } catch (error) {
            console.log("Error occur in airport service");
            throw {error};
        }
    }


    async getAirport(id){
        try {
            const airport = await airportRepository.getAirport(id);
            return airport;
        } catch (error) {
            console.log("Error occur in airport service");
            throw {error};
        }
    }

    async deleteAirport(id){
        try {
            const response = await airportRepository.deleteAirport(id);
        } catch (error) {
            console.log("Error occur in airport service");
            throw {error};
        }
    }
    
}

module.exports = AirportService;