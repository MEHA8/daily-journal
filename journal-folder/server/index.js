require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());




const corsOptions = {
  origin: "http://localhost:3001", // React frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));


// Use CORS middleware
app.use(cors(corsOptions));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
