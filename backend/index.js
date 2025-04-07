const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
require('dotenv').config();
const port = 3001;
const cors = require('cors');
const userRoutes = require('./routes/userroutes');

app.use(cors(
  {
    origin: 'http://localhost:5173',
    credentials: true,
  }
));
app.use(express.json());

app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});