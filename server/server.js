const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sessionStorage = require('sessionstorage');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 8000;

async function main() {
    await mongoose.connect(process.env.ATLAS_URL);
}

main().catch((err) => {
    console.log(err)
});

const db = mongoose.connection;

db.on('error', err => {
    console.log(err)
});

db.once('open', () => {
    console.log('Connected to database')
});

const corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    console.log('Inside GET endpoint');
    res.status(200).json({ msg: "Inside GET request" });
})


app.use(express.json());


