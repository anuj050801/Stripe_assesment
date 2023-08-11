const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const { check, validationResult } = require('express-validator');

const app = express();

// Enable CORS and JSON parsing middleware
app.use(cors());
app.use(express.json());

// Create a MySQL database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

// Define a route for signing up
app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name,` `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

// Define a route for logging in with validation checks
app.post('/login', [
    check('email', "Email length error").isEmail().isLength({ min: 10, max: 30 }),
    check('password', "Password length 8-10").isLength({ min: 8, max: 10 })
], (req, res) => {
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.json(errors);
        } else {
            if (err) {
                return res.json("Error");
            }

            if (data.length > 0) {
                return res.json("Success");
            } else {
                return res.json("Fail");
            }
        }
    });
});

// Start the server
app.listen(8081, () => {
    console.log("Listening on");

});
