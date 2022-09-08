const Admin = require("../models/Admin");
const mailer = require("../config/sendMails/mailer");
const bcrypt = require('bcryptjs');

const controllerAdmins = {
    getAll: async (req, res, next) => {
        try {
            const admins = await Admin.find();
            if (!admins.length) return res.status(400).json({ succes: false, message: "error 404" });
            res.status(200).json({ succes: true, data: admins });
        } catch (error) {
            return res.status(400).json({ succes: false, message: error});
        }
    },
    createAdmin: async (req, res, next) => {
        const { name, email, password, image } = req.body;
        try {
            const adminBd= await Admin.exists({
                email
            })
            if(adminBd) return res.status(400).json({ succes: false, message: " email ya registrado " })
            const hashedPassword = bcrypt.hashSync(password, 10)
            const newAdmin = await Admin.create({
                name,
                image,
                email,
                password:hashedPassword,
            });
            mailer.sendMailRegister(newAdmin, "Admin"); //Enviamos el mail de Confirmación de Registro
            res.status(200).json({succes: true, data: newAdmin})
        } catch (error) {
            return res.status(400).json({ succes: false, message: error});
        }
    },
    getAdmin: async (req, res, next) => {
        const { id } = req.params;
        try {
            try {
                const admin = await Admin.findById(id)
                if(!admin) return res.status(400).json({ succes: false, message: "error 404" })
                res.status(200).json({succes: true, data: admin})
                
            } catch (error) {
            return res.status(400).json({ succes: false, message: "error 404" });
            }
        } catch (error) {
            return res.status(400).json({ succes: false, message: error});
        }
    },
    pathAdmin: async (req, res, next) => {
        const { id } = req.params;
        const {enable} = req.body 
        try {
            try {
                const admin = await Admin.findById(id)
                if(!admin) return res.status(400).json({ succes: false, message: "error 404" })
                const enableAdmin = await Admin.updateOne(
                    {_id: id}, 
                    {$set: {active:enable}}
                    )
                res.status(200).json({succes: true})
                
            } catch (error) {
            return res.status(400).json({ succes: false, message: "error 404" });
            }
        } catch (error) {
            return res.status(400).json({ succes: false, message: error});
        }
    },
};

module.exports = controllerAdmins;
