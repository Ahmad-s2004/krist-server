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
const allowedOrigins = [
  'https://krist-client.vercel.app',
  'https://krist-client-n9uw.vercel.app'
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true); // Postman or server-side requests
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET','POST','PUT','DELETE']
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
