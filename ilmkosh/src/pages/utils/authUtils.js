import mockData from '../MOCK_DATA.json';

export const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 500); 
  });
};

export const validateUser = (email, password, users) => {
  return users.find(user => user.email === email && user.password === password);
};
