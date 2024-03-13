const {Airport} = require('../models/index');

class AirportRepository{
    async createAirport(data){
        const airport = await Airport.create({
            name:data.name,
            cityId:data.cityId
        });
        return airport;
    }

    async updateAirport(id,data){
        try{
            const airport = await Airport.findByPk(id);
            airport.name = data.name;
            await airport.save();
            return airport;
        } catch(error){
            throw {error}
        }
    }

    async getAirport(id){
        try{
            const airport = await Airport.findByPk(id);
            return airport;
        } catch(error){
            throw {error} 
        }
    }

    async deleteAirport(id){
        try {
            const response = await Airport.destroy({
                where:{
                    id:id
                }
            });
            return response;
        } catch (error) {
            throw {error};
        }
    }

}

module.exports = AirportRepository;