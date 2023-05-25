const express = require('express');
const dotenv = require('dotenv');
const PORT = process.env.PORT || 5000
const connectDB = require('./config/db');
const path = require('path')
const hotelRouter = require('./router/hotelRouter');
const roomRouter = require('./router/roomRouter');
const userRouter = require('./router/userRouter');
const app = express();

dotenv.config();
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/hotel', hotelRouter);
app.use('/api/room', roomRouter);
app.use('/api/users', userRouter);

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    );
  } else {
    app.get('/', (req, res) => res.send('Please set to production'));
  }

app.listen(PORT, () => console.log(`connected: ${PORT}`))