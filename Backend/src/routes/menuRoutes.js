import express from "express";
import MenuItem from "../models/MenuItem.js";

const router = express.Router();

// GET /api/menu?mealType=&foodType=
router.get("/", async (req, res) => {
  try {
    const { mealType, foodType } = req.query;

    const items = await MenuItem.find({
      mealType,
      foodType,
      isActive: true,
    });

    const menuByPage = {};

    items.forEach((item) => {
      const page = item.page; // 🔑 THIS IS THE KEY

      if (!menuByPage[page]) {
        menuByPage[page] = {};
      }

      if (!menuByPage[page][item.category]) {
        menuByPage[page][item.category] = {};
      }

      if (item.subCategory && item.subCategory.trim()) {
        if (!menuByPage[page][item.category][item.subCategory]) {
          menuByPage[page][item.category][item.subCategory] = [];
        }
        menuByPage[page][item.category][item.subCategory].push(item.name);
      } else {
        if (!menuByPage[page][item.category]._items) {
          menuByPage[page][item.category]._items = [];
        }
        menuByPage[page][item.category]._items.push(item.name);
      }
    });

    res.json(menuByPage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
