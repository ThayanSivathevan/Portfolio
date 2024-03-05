var express = require('express');
var app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.MONGOURI, {});

mongoose.connection.on('connected', () => {
    console.log("Connected")
})

mongoose.connection.on('error', (err) => {
    console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
})

require('./models/project')
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(morgan(process.env.LOGGING_LEVEL));
app.use("/projects", require('./routes/projects'));
if (process.env.NODE_ENV == "production") {
    app.use(express.static('frontend/out'))
    const path = require('path')
    app.get("*", (_req, res) => {
        res.send(path.resolve(__dirname, 'frontend', 'out', 'index.html'))
    })
}

app.listen(process.env.SERVER_PORT, () => {
    console.log("Server is running on", process.env.SERVER_PORT);
})