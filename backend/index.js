import express, { request } from "express";
import { PORT, MONGODB_URI } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

// middleware to parse request body
app.use(express.json());

// handle the cors policy for our react frontned
// option 1: allow all origins with default of cors(*)
// app.use(cors())
// option 2: allow custom origins (origin, methods, headers)
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('welcome to the backend');
});

app.use('/books', booksRoute);

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('app is connnected to the dataabse');
    app.listen(PORT, () => {
      console.log(`app is listening on: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
