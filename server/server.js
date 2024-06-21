const express = require('express');

const app = express();
const cors = require('cors');


// Server test functions
app.get("/test", (req, res) => {
    res.send("A2K");
})

app.listen(5000, () => { console.log("Server live on http://localhost:5000") });