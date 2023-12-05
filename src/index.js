require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const roomRoutes = require('./routes/room');
const contactRoutes = require('./routes/contact');
const aboutRoutes = require('./routes/about');
const customerRoutes = require('./routes/customer');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(middlewareLogRequest);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/room', roomRoutes);
app.use('/contact', contactRoutes);
app.use('/customer', customerRoutes);
app.use('/about', aboutRoutes);

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`The Server Is Successfully Running On The Port ${PORT}`);
});
