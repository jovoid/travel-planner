const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "travel_planner"
});

db.connect(err => {
    if (err) {
        console.log("DB FAILED", err);
    } else {
        console.log("MySQL Connected");
    }
});

app.get("/trips", (req, res) => {
    const sql = `
        SELECT users.name, trips.trip_name, destinations.city, destinations.country
        FROM users
        JOIN trips ON users.id = trips.user_id
        JOIN destinations ON trips.trip_id = destinations.trip_id
    `;
    db.query(sql, (err, result) => {
        if (err) return res.json(err);
        return res.json(result);
    });
});

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
