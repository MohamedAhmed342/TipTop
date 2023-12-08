// connect with db
const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect(process.env.DB_URI)
    .then((conn) => {
      console.log(`DataBase Connected Successfully :${conn.connection.host}`);
    })
    // .catch((err) => {
    //   console.error(`DataBase Erorr: ${err}`);
    //   process.exit(1);
    // });
};
module.exports = dbConnection;
