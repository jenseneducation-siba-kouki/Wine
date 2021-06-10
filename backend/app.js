const express = require('express')
const cors = require('cors')
const Datastore = require('nedb-promise')
const jwt = require('jsonwebtoken');
require("dotenv").config();
const app = express();
const User = require('./models/User.js');
const { generateOrderNr, generateETA } = require('./utils/utils');
const uuid = require('uuid-random');

const Cryptr = require('cryptr')
const cryptr = new Cryptr(process.env.SECRET)

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/register', async (request, response) => {
	const user = await User.register(request.body);

	if (user) {
		response.status(201).json(user);
	} else {
		response.status(500).json({ error: "Something went wrong" })
	}
})

app.post('/api/login', async (request, response) => {
	const user = await User.auth(request.body);

	if (user) {
		response.json(user);
	} else {
		response.send("please try again")
	}
	// console.log("logged in now")
})


app.post('/order', async (req, res) => {
    const order = {
        eta: generateETA(),
        orderNr: generateOrderNr(),
    }

    setTimeout(() => {
        res.send(order);
    }, 2000);
});
  
app.get('/key', (req, res) => {
    const key = {
        key: uuid()
    }
    res.send(JSON.stringify(key));
})









app.listen(5000, () => console.log("Server started"))
