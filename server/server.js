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
  
// Adds first user to the database AND creates a new group
// From the body this function expects:
// username, groupName, location, events (an array of strings)
app.post('/createGroup', async (req, res) => {
    // Generate a new Id
    const newId = uuidv4().slice(0, 10);

    const group = new Group({
        sessionId: newId,
        groupName: req.body.groupName,
        groupAdmin: req.body.username,
        users: [req.body.username],
        eventTypes: [req.body.events]
    });

    const user = new User({
        username: req.body.username,
        location: req.body.location
      });

    // Save the group to the database
    try {
        await group.save();
        await user.save();
        res.status(200).json({ msg: 'Group created successfully', id: newId, group: group, user: user});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create group' });
    }
});


// getUsers endpoint
app.get('/getUsers', async (req, res) => {
    try {
      const { sessionId } = req.query;
  
      // Find the group based on the sessionId
      const group = await Group.findOne({ sessionId: sessionId });

      if (!group) {
        return res.status(404).json({ message: 'Group not found' });
      }

      // Extract the users from the group
      const users = group.users;
  
      res.status(200).send(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });


// getEvents
app.get('/getEvents', async (req, res) => {
    try {
        let events = ['Restaurants', 'Hike Trails', 'Bowling', 'Clubs', 'Laser tag',
                      'Sport centres']
        res.status(200).json({ events: events });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });



