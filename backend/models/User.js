const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const Datastore = require("nedb-promise")
require("dotenv").config();
const dbUsers = new Datastore
	({
		filename: "./users.db",
		autoload: true
	});
module.exports = {
    
}