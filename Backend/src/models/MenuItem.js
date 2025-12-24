import { Schema, model } from "mongoose";

const menuItemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    mealType: {
      type: String,
      enum: ["breakfast", "lunch", "dinner"],
      required: true,
    },

    foodType: {
      type: String,
      enum: ["veg", "nonveg"],
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    subCategory: {
      type: String,
      default: "",
    },
    page: {
  type: String,
  enum: ["breakfast", "starters", "main", "cuisines", "desserts", "fruits"],
  required: true,
}
,

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default model("MenuItem", menuItemSchema);
