const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const dataPath = path.join(__dirname, 'MOCK_DATA.json');

// Middleware
app.use(bodyParser.json());

// Helper functions
const readData = () => {
  const data = fs.readFileSync(dataPath);
  console.log("data" , data);
  
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// GET route to fetch all users
app.get('/users', (req, res) => {
  const users = readData();
  res.json(users);
});

// POST route to register a new user
app.post('/register', (req, res) => {
  const users = readData();
  const newUser = req.body;

  if (!newUser.name || !newUser.email || !newUser.password || !newUser.confirmPassword) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  if (newUser.password !== newUser.confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match.' });
  }

  const userExists = users.find(user => user.email === newUser.email);
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  newUser.id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push(newUser);
  writeData(users);
  res.status(201).json(newUser);
});

// POST route to login a user
app.post('/login', (req, res) => {
  const users = readData();
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  // In a real application, you would generate a token here and send it to the client
  res.status(200).json({ message: 'Login successful', userId: user.id });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
