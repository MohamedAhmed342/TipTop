const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "config.env" });
const ApiError = require("./utils/apiError");
const globalError = require("./middlewares/errorMiddleware");
const dbConnection = require("./config/database");
const categoryRoute = require("./routes/categoryRoute");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

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
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

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
