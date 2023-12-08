const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "config.env" });
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/errorMiddleware");
const dbConnection = require("./config/database");
const categoryRoute = require("./routes/categoryRoute");
const User = require("./models/userModel");

//connect with db
dbConnection();

//express app
const app = express();
//Middlewares
app.use(express.json());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
  console.log(`mode:${process.env.NODE_ENV}`);
}

// Mount Routes
app.use("/api/v1/categories", categoryRoute);

app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this routs: ${req.originalUrl}`, 400));
});

//Global error handling middleware
app.use(globalError);

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Handle Rejection Outside Express
process.on("unhandledRejection", (err) => {
  console.error(`UnhandledRejection Error: ${err.name} | ${err.message}  `);
  server.close(() => {
    console.error(`Shutting down ....`);
    process.exit(1);
  });
});


// Register 
app.post('/register', async (req, res) => {
  try {
    const { username, address ,email ,password ,phoneNumber } = req.body;

    const findEmail = await User.findOne({ email });
    if (findEmail) {
      return res.status(400).json({ error: 'Email is already taken' });
    }

    const newUser = new User({ username, address ,email ,password ,phoneNumber});

    await newUser.save();

    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.log(error)
  }
});

//Log in
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    if (password != user.password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', username });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});