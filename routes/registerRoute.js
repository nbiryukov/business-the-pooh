var express = require('express');
var router = express.Router();
var db = require('../db/userdb.js');

router.post('/', function (req, res) {

	var login = req.body.login;
	var password = req.body.password;
	var name = req.body.name;
	var product = req.body.productType;
	db.registrationUser(login, password, name, product, function (user) {
		if (user == null) {
			res.json({ success: false, message: 'Не удалось зарегистрироваться, пользователь с таким логином уже существует' });
		}
		else {
			res.json({
				success: true,
				user: user
			});
		}
	});
});

module.exports = router;