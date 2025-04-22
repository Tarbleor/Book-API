const express = require('express');
const sequelize = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const Book = require('./models/book');

const app = express();
app.use(express.json());

app.use('/api/books', bookRoutes);

sequelize.sync().then(() => {
  console.log('DB synced');
  app.listen(3000, () => console.log('Server on http://localhost:3000'));
});
