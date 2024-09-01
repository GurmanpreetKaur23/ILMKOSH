const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, 'MOCK_DATA.json');

// Helper function to read data from MOCK_DATA.json
const readData = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

// Helper function to write data to MOCK_DATA.json
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET route to fetch all users
router.get('/users', (req, res) => {
  const users = readData();
  res.json(users);
});

// POST route to register a new user
router.post('/register', (req, res) => {
  const users = readData();
  const newUser = req.body;

  // Check for existing user with the same email
  const userExists = users.find(user => user.email === newUser.email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Add the new user to the list
  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push(newUser);
  writeData(users);
  res.status(201).json(newUser);
});

// PUT route to update an existing user
router.put('/users/:id', (req, res) => {
  const users = readData();
  const userId = parseInt(req.params.id, 10);
  const updatedUser = req.body;

  // Find the user to update
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update the user details
  users[userIndex] = { ...users[userIndex], ...updatedUser };
  writeData(users);
  res.json(users[userIndex]);
});

// DELETE route to remove a user
router.delete('/users/:id', (req, res) => {
  const users = readData();
  const userId = parseInt(req.params.id, 10);

  // Find the user to delete
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Remove the user
  users.splice(userIndex, 1);
  writeData(users);
  res.status(204).end();
});

module.exports = router;