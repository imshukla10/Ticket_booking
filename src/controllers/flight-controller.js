const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const response = await flightService.createFlight(req.body);

        return res.status(201).json({
            data:response,
            success:true,
            message:"Successfully created flight",
            err:{}
        })  
    } catch (error) {
        console.log("Something wrong in flight controller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a city",
            err:error
        })
    }
}

module.exports = {
    create
}