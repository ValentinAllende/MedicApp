const CarModel = require ('../models/Admin')


const  controllerUsers  = {
    getAll: async (req, res, next) =>{
        try {
            const carModel = await CarModel.find()
            res.json( carModel)
            
        } catch (error) {
            console.log(error);
        }
    },
    getAbout: async (req, res, next) =>{
        res.send('about')
    }
}

module.exports =  controllerUsers;