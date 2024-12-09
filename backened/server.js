require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const userRoutes = require("./routes/userRoutes");
const skillRoutes = require("./routes/skillRoutes");
const connectRoutes = require("./routes/connectRoutes");

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Replaces bodyParser.json()

// MongoDB connection
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error(
    "MongoDB connection string (MONGO_URI) is not defined in .env file."
  );
  process.exit(1);
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  });

// Routes
app.use("/api/users", userRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/connect", connectRoutes);

// Define the port to run the server
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
