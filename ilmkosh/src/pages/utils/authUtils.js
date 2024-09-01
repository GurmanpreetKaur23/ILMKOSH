// src/utils/authUtils.js
import mockData from '../MOCK_DATA.json';

export const fetchUsers = async () => {
  // Simulate a delay and return mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 500); // 500ms delay for demonstration
  });
};

export const validateUser = (email, password, users) => {
  return users.find(user => user.email === email && user.password === password);
};
