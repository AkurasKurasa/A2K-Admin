const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql')

app.use(cors())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "biometricattendance"
})

// Server test functions
app.get("/test", (req, res) => {
    res.send("A2K");
})

app.get("/logs", (req, res) => {
    const sql = "SELECT * FROM users_logs"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

app.listen(5000, () => { console.log("Server live on http://localhost:5000") });