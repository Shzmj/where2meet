const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
import { v4 as uuidv4 } from 'uuid';
import User from './models/User.js';
import Group from './models/Group.js'


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


app.post('/createUser', async (req, res) => {
    try {
      const user = new User({
        username: req.body.username,
        location: req.body.location
      });
  
      await user.save();

      res.status(200).json({ msg: 'User created successfully', user: user});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  });
  

app.post('/createGroup', async (req, res) => {
    // Generate a new Id
    const newId = uuidv4().slice(0, 10);

    const group = new User({
        sessionId: newId,
        groupAdmin: '',
        users: [],
        eventTypes: []
    });

    // Save the group to the database
    try {
        await group.save();
        res.status(200).json({ msg: 'Group created successfully', id: newId, group: group});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create group' });
    }
});




