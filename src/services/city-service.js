const {CityRepository} = require('../repository/index');

class CityService{
    constructor(){
        this.cityRepository = new CityRepository()
    }

    async createCity(data){
        try {
            const city = await this.cityRepository.createCity(data)
            return city
        } catch (error) {
            console.log("Wrong at Service layer")
            throw {error}
        }
    }

    async createMultipleCity(data){
        try {
            const cities = await this.cityRepository.createMultipleCity(data);
            return cities;
        } catch (error) {
            throw {error}
        }
    }


    async deleteCity(cityId){
        try {
            const response = this.cityRepository.deleteCity(cityId)
            return response
        } catch (error) {
            console.log("Wrong at Service layer")
            throw {error}
        }
    }

    async updateCity(cityId,data){
        try {
            const city = await this.cityRepository.updateCity(cityId,data)
            return city
        } catch (error) {
            console.log("Wrong at Service layer")
            throw {error}
        }
    }

    async getCity(cityId){
        try {
            const city = await this.cityRepository.getCity(cityId)
            return city
        } catch (error) {
            console.log("Wrong at Service layer")
            throw {error}
        }
    }

    async getAllCity(filter){
        try {
            const cities = await this.cityRepository.getAllCity({name:filter.name})
            return cities
        } catch (error) {
            console.log("Wrong at Service layer")
            throw {error}
        }
    }


}

module.exports = CityService;