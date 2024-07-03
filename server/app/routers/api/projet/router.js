const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import projet-related actions
const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/projetActions");

// Route to get a list of projets
router.get("/", browse);

// Route to get a specific projet by ID
router.get("/:id", read);

// Route to modify a specific projet by ID
router.put("/:id", edit);

// Route to add a new projet
router.post("/", add);

// Route to remove a new projet by ID
router.delete("/:id", destroy);

/* ************************************************************************* */

module.exports = router;
