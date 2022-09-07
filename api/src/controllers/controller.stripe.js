const Stripe = require('stripe');

const stripe = new Stripe('sk_test_51Lf84jLDOm9knXDHOPYKJmMrN7raSHN7oxyWv73dQPQcXccbgq7vb6v3sJy0ENEAT967aTeKjsJvCxK8SNqUNHCV00BCFgN0U5')

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
		res.json({ msg: "Successful payment" })
    } catch (error) {
        res.json(error)
    }
  },
};

module.exports = controllerUsers;
