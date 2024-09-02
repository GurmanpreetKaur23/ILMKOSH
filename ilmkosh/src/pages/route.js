const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();  
const port = 5000;
const dataPath = path.join(__dirname, 'MOCK_DATA.json');

// Middleware to parse JSON request bodies
app.use(express.json());

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
app.get('/api/users', (req, res) => {
  const users = readData();
  res.json(users);
});

// POST route to register a new user
app.post('/api/users', (req, res) => {
  const users = readData();
  const newUser = { ...req.body, id: users.length + 1 }; // Add new user with an incremented ID
  users.push(newUser);
  writeData(users);
  res.status(201).json({ status: 'success', id: newUser.id });
});

// PUT route to update an existing user
app.put('/api/users/:id', (req, res) => {
  const users = readData();
  const userId = parseInt(req.params.id, 10);
  const updatedUser = req.body;

  // Find the user to update
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Update the user details
  users[userIndex] = { ...users[userIndex], ...updatedUser };
  writeData(users);
  res.json(users[userIndex]);
});

// DELETE route to remove a user
app.delete('/api/users/:id', (req, res) => {
  const users = readData();
  const userId = parseInt(req.params.id, 10);

  // Find the user to delete
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Remove the user
  users.splice(userIndex, 1);
  writeData(users);
  res.status(204).end();
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
