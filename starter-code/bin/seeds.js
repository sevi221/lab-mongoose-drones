// Iteration #1
const mongoose = require('mongoose');

require('../config/db.config');

const Drone = require('../models/drone.js');

const drones = [{
    name: 'Creeper XL 500',
    propellers: 3,
    maxSpeed: 12
  },
  {
    name: 'Racer 57',
    propellers: 4,
    maxSpeed: 18
  },
  {
    name: 'Courier 3000i',
    propellers: 6,
    maxSpeed: 18
  }
];

Drone.create(drones).then((docs) => {
  docs.forEach((drones) => {
    console.log(drones.name)
  });

  mongoose.connection.close();
});
