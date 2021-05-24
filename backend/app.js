const express = require('express')
const cors = require('cors')
const Datastore = require('nedb')
const jwt = require('jsonwebtoken');
require("dotenv").config();
const app = express();
const User = require('./models/User.js');
const { verify } = require('./auth')

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
})










app.listen(5000, () => console.log("Server started"))
