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
            message:"Not able to create a flight",
            err:error
        })
    }
}

const get = async (req,res)=>{
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched flight",
            err:{}
        });
    } catch (error) {
        console.log("Something wrong in flight controller");
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetched a flight",
            err:error
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const response = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully fetched flight",
            err:{}
        });
    } catch (error) {
        console.log("Something wrong in flight controller",error);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetched the flight",
            err:error
        })
    }
}

module.exports = {
    create,
    get,
    getAll
}