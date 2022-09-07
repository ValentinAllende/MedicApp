const express = require('express');
const Stripe = require('stripe');
const router = express.Router();
router.use(express.json())

router.use(cors({origin: 'https://localhost:3000'}))

// Vamos a configurar el backend de modo que podamos requerir a Stripe
// Primero creamos un nuevo servidor:


// Una vez confirmado que los datos los recibimos por body, vamos a mandarlos
// a Stripe!
const stripe = new Stripe('sk_test_51Lf84jLDOm9knXDHOPYKJmMrN7raSHN7oxyWv73dQPQcXccbgq7vb6v3sJy0ENEAT967aTeKjsJvCxK8SNqUNHCV00BCFgN0U5')

// Configuramos el cors para que no haya problemas con el front

// configuramos express para que pueda leer objetos JSON


// Ahora creamos la ruta a la que vamos a recibir los datos del post en el 
// frontend
router.post('/api/checkout', async (req, res) => {
	const { id, amount } = req.body;
	console.log("recibido",req.body)
	console.log("detalle compra: ", amount,"id: " ,id)
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
	} catch(error) {
		console.log(error)
		res.json({ message: error.row.message })
	}
});

module.exports= router