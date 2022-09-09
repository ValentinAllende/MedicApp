const Stripe = require('stripe');
const   Jwt  = require('jsonwebtoken');
const Appointment = require("../models/Appointment");
const mailer = require("../config/sendMails/mailer");

const stripe = new Stripe(process.env.SK_STRIPE)

const controllerUsers = {
  checkout: async (req, res, next) => {
    const { id,amount} = req.body;
    // console.log("idUser",user_id);
   
    const { idDoctor, hour, date, paymentProcessed} = req.body; 
      //console.log(hour, date, idDoctor, paymentProcessed)
     const user_id = req.user_id
    try {
        const payment = await stripe.paymentIntents.create({
			currency: "USD",
			amount,
			description: "Consulta",
			payment_method: id,
			confirm: true
		});
		// console.log("payment", payment)
    const newAppointment = new Appointment({ patient:user_id, doctor:idDoctor, hour,date, paymentProcessed});
    await newAppointment.save();
    mailer.sendMailAppointment(newAppointment); //envio email
    console.log(newAppointment, 'cita :D')
		res.json({ msg: "Successful payment" })
    
    } catch (error) {
        res.json(  error)
    }
  },
};
// const appointment = { 
//   const a async (req, res, next) => {
//     console.log('entre en create')
// // const { date, hour, paymentProcessed, doctor, patient } = req.body;
//   //const { idDoctor, hour, date, paymentProcessed} = req.body; 
//   //
//   try {
//     const newAppointment = new Appointment({ patient:user_id, doctor:idDoctor, hour,date, paymentProcessed});
//     await newAppointment.save();
//     //mailer.sendMailAppointment(newAppointment); //Enviamos el mail de Confirmación de Cita al Paciente y Doctor. 
//     return res.status(201).send({ newAppointment: newAppointment });
//   } catch (error) {
//     return res.status(error.code || 500).send({ errors: error.message });
//   }
// },}
module.exports = controllerUsers;
