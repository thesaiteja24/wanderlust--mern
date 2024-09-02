/**
 * @author Sai Teja
 * This is file can be used to intialize the database with some temporary data to work with
 * run this file:
 * cd init
 * node index.js
 *
 * This will clear all the existing data in the database and inserts the new data
 * defined in "data.js" file
 */

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  try {
    // Clear the existing data
    await Listing.deleteMany({});

    // Array of possible owner IDs
    const ownerIds = ["66cd9dd1aa4c361039258a6a", "66ce60ae5c805d2be7a6f425"];

    // Modify each object to include a randomly assigned owner from the array
    const modifiedData = initData.data.map((obj) => ({
      ...obj,
      owner: ownerIds[Math.floor(Math.random() * ownerIds.length)],
    }));

    // Insert the modified data into the database
    await Listing.insertMany(modifiedData);

    console.log("Data was initialized");
  } catch (error) {
    console.error("Failed to initialize data:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

initDB();
