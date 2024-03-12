const { Op } = require('sequelize');

const {City} = require('../models/index')

class CityRepository{
    async createCity({name}){
        try {
            const city = await City.create({name});
            return city;
        } catch (error) {
            throw {error}
        }
    }

    async createMultipleCity(data){
        try {
            const cities = await City.bulkCreate(data.map(item => ({ name: item.name })));
            return cities;
        } catch (error) {
            throw {error}
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch(error){
            throw {error}
        }
    }


    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId)
            return city
        } catch(error){
            throw {error} 
        }
    }

    async getAllCity(filter){
        try {
            if(filter.name){
                const city = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                })
                return city
            }
            const cities = await City.findAll()
            return cities
        } catch (error) {
            throw {error}
        }
    }

    async deleteCity(cityId){
        try {
            await City.destroy({
                where:{
                    id:cityId
                }
            })
        } catch (error) {
            throw {error}
        }
    }
}

module.exports = CityRepository