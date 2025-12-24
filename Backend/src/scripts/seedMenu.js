import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import MenuItem from "../models/MenuItem.js";

dotenv.config();

// Read JSON file manually (safe for all Node versions)
const menuItems = JSON.parse(
  fs.readFileSync("./src/data/menuItems.json", "utf-8")
);

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected for seeding");

    await MenuItem.deleteMany();
    await MenuItem.insertMany(menuItems);

    console.log(`Menu items seeded successfully: ${menuItems.length}`);
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err.message);
    process.exit(1);
  }
};

seedData();
