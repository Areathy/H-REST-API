const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Import routes
const postRoute = require('./routes/Post.route');

app.use('/post', postRoute);

// Routes
app.get('/', (req, res) => {
   res.send('Backend is where the real fun is!');
})

// Connect to DB
mongoose.connect(process.env.DataBaseConnection, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }, () => console.log("Henrietha's DB connection successful wooho!!!"))

// Listening
app.listen(5000); 