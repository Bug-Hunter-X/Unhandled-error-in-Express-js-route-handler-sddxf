const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user details based on userId ...
  if (!user) {
    return res.status(404).send('User not found'); //This is the problematic line
  }
  res.send(user);
});