const express = require('express');
const app = express();
const db = require('./database/db.js');
const path = require('path');
const cors = require('cors');
const router = require('./routers/getRoutes.js');
const routerPost = require('./routers/postRoute.js');
const cookieParser = require('cookie-parser');
require('dotenv').config();

// Database
db();

app.use(cors({
  origin: 'http://krist-client-i07hpq8pe-ahmad-s2004s-projects.vercel.app',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/uploads')));
app.use('/product', router);
app.use('/post', routerPost);

app.get('/server/check', (req, res) => {
  res.send('Server is running');
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`Server is started at port ${PORT}`);
});