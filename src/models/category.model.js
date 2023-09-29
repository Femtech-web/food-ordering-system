const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CATEGORIES = [
  "Jollof Rice",
  "Fried Rice",
  "Coconut Rice",
  "Ofada Rice",
  "Fufu", 
  "Semo",
  "Wheat",
  "Egusi Soup",
  "Okra Soup",
  "Ogbono Soup",
  "Edikang Ikong Soup",
  "Banga Soup",
  "Akamu",
  "Yam and Egg Sauce",
  "Plantain and Egg",
  "pizzas",
  "sandwiches",
  "hot dogs",
  "Suya (Grilled Skewered Meat)",
  "Pepper Soup",
  "Asun (Spicy Goat Meat)",
  "Isi Ewu (Goat Head Soup)",
];

const categorySchema = new Schema(
  {
    name: { type: String, require: true, trim: true, lowercase: true },
    quantity: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
categorySchema.statics.decrementCategoryProducts = function (categoryName) {
  this.findOneAndUpdate(
    { name: categoryName },
    { $inc: { quantity: -1 } },
    { new: true }
  );
};
categorySchema.statics.incrementCategoryProducts = function (categoryName) {
  this.findOneAndUpdate(
    { name: categoryName },
    { $inc: { quantity: 1 } },
    { new: true }
  );
};
const Category = mongoose.model("Category", categorySchema);

module.exports = { Category, CATEGORIES };
