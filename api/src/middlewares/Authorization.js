const   Jwt  = require('jsonwebtoken');


const ValidateToken = {
    Admin : async  (req, res, next)=> {
        try {
            const headerToken = req.get("Authorization");
            if(!headerToken){
                return res.status(400).json({succes: false, error: 'Token no valido'})
            }
            const token = headerToken?.replace("Bearer ", "");
            try {
                const decoded =  Jwt.verify(token, "admintoken" )// process.env.TOKEN_SECRET_ADMIN )
                if(!decoded) return res.status(400).json({succes: false, error: 'Token no valido'})
                req.user_id= decoded.user_id;
                next()
            } catch (error) {
                return res.status(400).send(error)
            }
        } catch (error) {
            return res.status(400).send(error)
        }
    },
    Doctor : async  (req, res, next)=> {
        try {
            
            const headerToken = req.get("Authorization");
            if(!headerToken){
                return res.status(400).json({succes: false, error: 'Token no valido'})
            }
            const token = headerToken?.replace("Bearer ", "");
            try {
                const decoded = Jwt.verify(token,"doctortoken" )// process.env.TOKEN_SECRET_ARTIST )
                req.user_id =  decoded.user_id
                return next() 
            } catch (error) {
                return res.status(400).send(error)
            }
        } catch (error) {
            
        }
        
    },
    Patient : async  (req, res, next)=> {
        try {
            
            const headerToken = req.get("Authorization");
            if(!headerToken){
                return res.status(400).json({succes: false, error: 'Token no valido'})
            }
            const token = headerToken?.replace("Bearer ", "");
            try {
                const decoded = Jwt.verify(token,"pacientetoken" )// process.env.TOKEN_SECRET_ARTIST )
                req.user_id =  decoded.user_id
                return next() 
            } catch (error) {
                return res.status(400).send(error)
            }
        } catch (error) {
            
        }
        
    }
}







module.exports = ValidateToken;