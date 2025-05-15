import express, { request } from "express";
import { PORT, MONGODB_URI } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'

const app = express();

app.use(express.json());

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
