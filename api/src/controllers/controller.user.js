
const  controllerUsers  = {
    getAll: async (req, res, next) =>{
        res.send('index')
    },
    getAbout: async (req, res, next) =>{
        res.send('about')
    }
}

module.exports =  controllerUsers;