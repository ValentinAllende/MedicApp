const Stripe = require('stripe');
const   Jwt  = require('jsonwebtoken');



const stripe = new Stripe(process.env.SK_STRIPE)

const controllerUsers = {
  checkout: async (req, res, next) => {
    const { id, amount} = req.body;
    const user_id = req.user_id
    console.log("idUser",user_id);
    


   
    try {
        const payment = await stripe.paymentIntents.create({
			currency: "USD",
			amount,
			description: "Consulta",
			payment_method: id,
			confirm: true
		});
		// console.log("payment", payment)

		res.json({ msg: "Successful payment" })

    } catch (error) {
        res.json(  error)
    }
  },
};

module.exports = controllerUsers;
