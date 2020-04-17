const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

 const uri = process.env.ATLAS_URI;
 mongoose.connect(uri, 
 { useNewUrlParser: true, 
   useFindAndModify: false, 
   useCreateIndex: true, 
   useUnifiedTopology: true
 },(err)=>{
    if(err){
        console.log('Could not connect to database');
        console.log(err);
        process.exit(1);
    }
    else
        console.log('Successfully connected to database');
 });
 
 const connection = mongoose.connection;
 connection.once('open', () => {
   console.log("MongoDB database connection established successfully");
 })

const postsRouter = require('./routes/postRoutes');
const usersRouter = require('./routes/userRoutes');

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});