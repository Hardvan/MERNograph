import express from "express"; // For creating server
import bodyParser from "body-parser"; // For parsing the body of the request
import mongoose from "mongoose"; // For connecting to the database
import cors from "cors"; // For cross origin resource sharing

// Importing the routes (Custom)
import postRoutes from "./routes/posts.js";

// Import .env file
import dotenv from "dotenv";
dotenv.config();

const app = express(); // Creating the server

// Setting up the routes
app.use("/posts", postRoutes); // All the routes in posts.js will start with /posts

// Setting up the body parser to parse the body of the request
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Setting up the cors
app.use(cors());

// Setting MongoDB
const username = process.env.MONGODB_USER;
const password = process.env.MONGODB_PASSWORD;
const CONNECTION_URL = `mongodb+srv://${username}:${password}@mernographcluster.uxk0si7.mongodb.net/?retryWrites=true&w=majority`;

// Connecting to the database
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

// Setting up the port
const PORT = process.env.PORT || 5000;
