const express = require("express");
const router = express.Router();
const { auth, isAdmin } = require("../middlewares/auth");
const Recipe = require("../models/recipes");

// GET recipes based on search query
router.get("/recipes/search", async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    // Use a regular expression to perform a case-insensitive search
    const recipes = await Recipe.find({
      $or: [
        { strMeal: { $regex: new RegExp(query, "i") } },
        { strCategory: { $regex: new RegExp(query, "i") } },
        { strArea : { $regex: new RegExp(query, "i") } },
      ],
    });

    if (recipes.length === 0) {
      return res.status(404).json({ message: "No recipes found for the given query" });
    }

    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all recipes
router.get("/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a specific recipe by ID
router.get("/recipes/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Module not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST a new recipe
router.post("/recipes", auth, isAdmin, async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT/update a recipe by ID
router.put("/recipes/:id", auth, isAdmin, async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!recipe) {
      return res.status(404).json({ message: "Module not found" });
    }
    res.json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a recipe by ID
router.delete("/recipes/:id", auth, isAdmin, async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Module not found" });
    }
    res.json({ message: "Module deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
