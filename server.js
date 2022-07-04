require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/Books');

// express app
const app = express();

const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/books', bookRoutes);

// connect to db
mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(PORT || 5000, () => {
      console.log(`Connected to db & listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
