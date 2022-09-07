const Stripe = require('stripe');
const mailer = require("../config/sendMails/mailer");


const stripe = new Stripe(process.env.SK_STRIPE)

const controllerUsers = {
  checkout: async (req, res, next) => {
    const { id, amount } = req.body;
    console.log("Recibido",req.body)
    try {
        const payment = await stripe.paymentIntents.create({
			currency: "USD",
			amount,
			description: "Consulta",
			payment_method: id,
			confirm: true
		});
		console.log("payment", payment)
    mailer.sendMailAppointment(newAppointment);
		res.json({ msg: "Successful payment" })

    } catch (error) {
        res.json(  error)
    }
  },
};

module.exports = controllerUsers;
