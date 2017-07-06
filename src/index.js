// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import passport from 'passport';
import ItemRoutes from './routes/ItemRoutes';

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://aca:whiteboard@ds135912.mlab.com:35912/whiteboard-final")
  .then(() => console.log("[mongoose] Connected to MongoDB"))
  .catch(() => console.log("[mongoose] Error connecting to MongoDB"));

const app = express();

const authenticationRoutes = require("./routes/AuthenticationRoutes");

app.use(bodyParser.json());
app.use(ItemRoutes);
// app.use(authenticationRoutes);
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
