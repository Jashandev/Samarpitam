const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const fetchuser = require('../Middleware/fetchtoken');
const bcrypt = require("bcrypt");
require('dotenv').config();
var jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const User = require("../Models/User");
const Doctor = require("../Models/Doctor");
const Mail = require('../Services/Mail');
const fs = require('fs');
const path_Welcome = '../Backend/Services/Mail_Tamplates/Welcome.html';


router.post("/Register",
	body("name", "name min 3 length").isLength({ min: 3 }),
	body("phone", "Invaild Phone number").isLength({ min: 10, max: 10 }).isNumeric().isMobilePhone(),
	body("email", "Enter a vaild email").optional().isEmail(),
	body("password", "password should be atleast 5 length").isLength({ min: 5 }),
	async (req, res) => {
		try {

			// checking user input fileds

			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(403).json({ ValidationErrors: errors.array(), "error": "True", "msg": "Syntax error" });
			}

			//  checking not req fileds

			const { name, phone, email, DOB } = req.body;
			const NewUser = { name, phone };
			if (email) { NewUser.email = email.toLowerCase() };
			if (DOB) { NewUser.DOB = DOB };

			// checking user allready exist or not

			const finduserexist = await User.findOne({ phone: req.body.phone });
			if (finduserexist) {
				return res.status(409).json({ "error": "Ture", "msg": "sorry user with this email already exist" });
			}


			fs.readFile(path_Welcome, 'utf8', (err, data) => {
				if (err) {
					console.error('Error reading HTML file:', err);
				} else if (email) {
					const mail_data = {};
					mail_data.to = email;
					mail_data.from = "secure.services@samarpitam.com";
					mail_data.head = "Samarpitam";
					mail_data.subject = "Welcome to our famaily";
					mail_data.html = data;
					Mail(mail_data);
				};
			});



			// hashing password

			await bcrypt.genSalt(10, async function (err, salt) {
				await bcrypt.hash(req.body.password, salt, async function (_err, hash) {
					// Store hash in your password DB.
					NewUser.password = hash;
					const user = await User.create(NewUser);
					// create token for a user
					const data = {
						Userinfo: {
							id: user.id,
						},
					};
					const token = jwt.sign(data, JWT_SECRET);
					res.json({ "error": "false", token });
				});
			});
		} catch (error) {
			return res.status(500).json({ "error": error.message, "msg": "Intarnal server error" });
		}
	}
);

router.post("/login",
	body("phone", "Invaild Phone number").isLength({ min: 10, max: 10 }).isNumeric().isMobilePhone(),
	body("password", "password should be atleast 5 length").isLength({ min: 5 }),
	async (req, res) => {
		try {

			// checking user input fileds

			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(403).json({ ValidationErrors: errors.array(), "error": "True", "msg": "Syntax error" });
			}

			// checking user exist or not

			const { phone, password } = req.body;

			const Userinfo = await User.findOne({ phone });
			if (!Userinfo) {
				return res.status(403).json({ "error": "Ture", "msg": "sorry user with this Phone number can't exist" });
			}

			//  checking password

			const match = await bcrypt.compare(password, Userinfo.password);
			if (!match) {
				return res.status(403).json({ "error": "Ture", "msg": "password incorrect" });
			}

			// create token for a user

			const data = {
				Userinfo: {
					id: Userinfo.id
				}
			};
			const token = jwt.sign(data, JWT_SECRET);
			res.json({ "error": "false", token });
		} catch (error) {
			return res.status(500).json({ "error": error.message, "msg": "Intarnal server error" });
		}
	}
);

router.get("/authication", fetchuser, async (req, res) => {
	try {
		const userid = req.data.Userinfo.id;
		const user = await User.findOne({ _id: userid }).select("-password")
		res.json({ "error": "false", user })

	} catch (error) {
		return res.status(500).json({ "error": error.message, "msg": "Intarnal server error" });
	}


});

router.post("/Adminlogin",
	body("phone", "Invaild Phone number").isLength({ min: 10, max: 10 }).isNumeric().isMobilePhone(),
	body("password", "password should be atleast 5 length").isLength({ min: 5 }),
	async (req, res) => {
		try {

			// checking user input fileds

			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.status(403).json({ ValidationErrors: errors.array(), "error": "True", "msg": "Syntax error" });
			}

			// checking user exist or not

			const { phone, password } = req.body;

			const Userinfo = await Doctor.findOne({ phone });
			if (!Userinfo) {
				return res.status(403).json({ "error": "Ture", "msg": "sorry user with this Phone number can't exist" });
			}

			// check docter active or not 

			if (!Userinfo.status) {
				return res.status(403).json({ "error": "Ture", "msg": "User account inactive" });
			}

			//  checking password

			const match = await bcrypt.compare(password, Userinfo.password);
			if (!match) {
				return res.status(403).json({ "error": "Ture", "msg": "password incorrect" });
			}

			// create token for a user

			const data = {
				Userinfo: {
					id: Userinfo.id,
					type: "Admin"
				}
			};
			const token = jwt.sign(data, JWT_SECRET);
			res.json({ "error": "false", token });
		} catch (error) {
			return res.status(500).json({ "error": error.message, "msg": "Intarnal server error" });
		}
	}
);

router.get("/adminauthication", fetchuser, async (req, res) => {
	try {
		const userdata = req.data.Userinfo;
		const user = await Doctor.findOne({ _id: userdata.id }).select("-password")
		res.json({ "error": "false", user , userdata })

	} catch (error) {
		return res.status(500).json({ "error": error.message, "msg": "Intarnal server error" });
	}


});

router.post("/Doctor/update", fetchuser , async (req, res) => {
	try {

		const userdata = req.data.Userinfo;

		if (userdata.type === "Admin") {

			const check = await Doctor.findOne({_id: userdata.id});
			if(!check){return res.status(409).json({"error":"true","msg":"Doctor not found"})}

			const NewUser = {};

			// hashing password

			await bcrypt.genSalt(10, async function (err, salt) {
				await bcrypt.hash(req.body.confirm, salt, async function (_err, hash) {
					// Store hash in your password DB.
					NewUser.password = hash;
				});
			});	

			await Doctor.findOneAndUpdate({_id:userdata.id},{$set:NewUser},{new:true});
			return res.json({"error":"false","msg":"Doctor Password Changed"});

		}
		return res.json({"error":"true","msg":"Unauthorized access"});


	} catch (error) {
		return res.status(500).json({ "error": error.message, "msg": "Intarnal server error" });
	}
}
);



module.exports = router;